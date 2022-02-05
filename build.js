'use strict';

const now = new Date();

const fs = require('fs');
const PdfPrinter = require('pdfmake');
const config = require('./content/Book.js');
const languages = Object.keys(config.languages);

const printer = new PdfPrinter(config.fonts);
const content = [];
const lang = 'en';

const front = config.languages[lang];

content.push({ text: front.title, ...config.title });
content.push({ text: front.subtitle, ...config.subtitle });
content.push({ text: front.copyright, ...config.copyright });
content.push({ text: front.location, ...config.location });

const caption = (s) => {
  content.push({ text: s, ...config.caption });
};

const index = (s) => {
  content.push({ text: s, ...config.index });
};

const para = (s) => {
  content.push({ text: s, ...config.para });
};

const code = (src) => {
  content.push({
    table: {
      widths: ['*'],
      body: [
        [
          {
            margin: [30, 5, 30, 5],
            text: src,
          },
        ],
      ],
    },
    ...config.code,
  });
};

const section = (name) => {
  content.push({ text: '', pageBreak: 'before' });
  const src = fs.readFileSync(`content/${name}.${lang}.md`, 'utf8');
  const rows = src.split('\n');
  let lines = [];
  for (const row of rows) {
    if (row.startsWith('#')) {
      const text = row.replace('#', '');
      caption(text);
    } else if (row.trim().substring(0, 3).includes('.')) {
      index(row);
    } else if (row === '') {
      para(lines.join(' '));
      lines = [];
    } else {
      lines.push(row);
    }
  }
};

for (const name of config.sections) {
  section(name);
}

/*
para('Consider following:');
code(`const id = (x) => x;

// Usage

const res = id(5);
console.log({ res });`);
*/

const book = printer.createPdfKitDocument({
  content,
  pageSize: 'A5',
  pageMargins: [0, 20, 0, 20],
  footer: (currentPage) => ({
    text: currentPage.toString(),
    alignment: 'center',
  }),
});

book.pipe(fs.createWriteStream('book.pdf'));
book.end();

console.log('Time spent:', new Date() - now);
