'use strict';

const hljs = require('highlight.js');
const css = require('css');
const fs = require('fs');

const TEMP_PATH_STYLE = './node_modules/highlight.js/styles/atom-one-light.css';

class Styles {
  constructor() {
    const content = fs.readFileSync(TEMP_PATH_STYLE).toString();
    const parsed = css.parse(content, {});
    const stylesheet = parsed.stylesheet.rules;
    this.css = {};
    for (const rule of stylesheet) {
      const { type, selectors, declarations } = rule;

      if (type === 'rule') {
        const styles = {};
        for (const declaration of declarations) {
          const { property, value } = declaration;
          if (
            ['font-weight', 'font-style'].some((e) => e === property) &&
            ['bold', 'italic'].some((e) => e === value)
          ) {
            styles[value] = true;
          } else if (
            property === 'text-decoration' &&
            ['underline', 'lineThrough', 'overline'].some((e) => e === value)
          ) {
            styles.decoration = value;
          } else if (
            ['color', 'background'].some((e) => e === property) &&
            ['url', 'rgb'].some((e) => !value.includes(e))
          ) {
            styles[property] = value;
          }
        }

        for (const selector of selectors) {
          selector.split(' ').forEach((s) => { this.css[s] = styles; });
        }
      }
    }
  }

  findColor(scope) {
    if (!(scope in this.css)) {
      return {};
    }
    return this.css[scope];
  }
}

const emitsWrappingTags = (node) => !!node.kind;

class PDFRenderer extends Styles {
  constructor(parseTree, options) {
    super();
    this.buffer = [];
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }

  addText(text) {
    const lastIndex = this.buffer.length - 1;
    const last = this.buffer[lastIndex];
    if (typeof last === 'object') {
      last.text = text;
      this.buffer.splice(lastIndex, 1, last);
    } else {
      this.buffer.push(text);
    }
  }

  openNode(node) {
    if (!emitsWrappingTags(node)) return;
    const scope = node.kind.includes('.') ? node.kind.split('.')[0] : node.kind;
    this.buffer.push(this.findColor(`.${this.classPrefix}${scope}`));
  }

  closeNode() {
    this.buffer.push('');
  }

  value() {
    return this.buffer;
  }
}

class TokenTree {
  constructor() {
    this.rootNode = { children: [] };
    this.stack = [this.rootNode];
  }

  get top() {
    return this.stack[this.stack.length - 1];
  }

  get root() { return this.rootNode; }

  add(node) {
    this.top.children.push(node);
  }

  openNode(kind) {
    const node = { kind, children: [] };
    this.add(node);
    this.stack.push(node);
  }

  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    return undefined;
  }

  closeAllNodes() {
    while (this.closeNode());
  }

  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }

  walk(builder) {
    return this.constructor._walk(builder, this.rootNode);
  }

  static _walk(builder, node) {
    if (typeof node === 'string') {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }

  static _collapse(node) {
    if (typeof node === 'string') return;
    if (!node.children) return;

    if (node.children.every((el) => typeof el === 'string')) {
      // node.text = node.children.join("");
      // delete node.children;
      node.children = [node.children.join('')];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}

class TokenTreeEmitter extends TokenTree {
  constructor(options) {
    super();
    this.options = options;
  }

  addKeyword(text, kind) {
    if (text === '') { return; }

    this.openNode(kind);
    this.addText(text);
    this.closeNode();
  }

  addText(text) {
    if (text === '') { return; }
    this.add(text);
  }

  addSublanguage(emitter, name) {
    const node = emitter.root;
    node.kind = name;
    node.sublanguage = true;
    this.add(node);
  }

  toHTML() {
    return this.toPDF();
  }

  toPDF() {
    const renderer = new PDFRenderer(this, this.options);
    return renderer.value();
  }

  finalize() {
    return true;
  }
}

hljs.configure({ __emitter: TokenTreeEmitter });

module.exports = (src) => hljs.highlightAuto(src).value;
