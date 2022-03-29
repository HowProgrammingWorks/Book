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
          console.dir({ property, value });
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
}

class PDFRenderer extends Styles {
  constructor() {
    super();
  }
}

class TokenTree {
  constructor() {}
}

class TokenTreeEmitter extends TokenTree {
  constructor() {
    super();
  }

  toHTML() {
    return this.toPDF();
  }

  toPDF() {
    const renderer = new PDFRenderer(this, this.options);
    return renderer.value();
  }
}

hljs.configure({ __emitter: TokenTreeEmitter });

module.exports = (src) => hljs.highlightAuto(src).value;
