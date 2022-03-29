'use strict';

const hljs = require('highlight.js');
const css = require('css');
const fs = require('fs');

class Styles {
  constructor() {}
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

  toHTML() { return this.toPDF(); }

  toPDF() {
    const renderer = new PDFRenderer(this, this.options);
    return renderer.value();
  }
}

hljs.configure({ __emitter: TokenTreeEmitter });

module.exports = (src) => hljs.highlightAuto(src).value;
