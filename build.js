'use strict';

const now = new Date();

const fs = require('fs');
const PdfPrinter = require('pdfmake');
const config = require('./content/Book.js');
const languages = Object.keys(config.languages);
const printer = new PdfPrinter(config.fonts);

const BLOCK_TEXT = 1;
const BLOCK_CODE = 2;

const generate = (lang) => {
  const content = [];
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
    const src = fs.readFileSync(`content/${lang}/${name}.md`, 'utf8');
    const rows = src.split('\n');
    let block = BLOCK_TEXT;
    let lines = [];
    for (const row of rows) {
      if (row.startsWith('#')) {
        const text = row.replace(/#/g, '');
        caption(text);
      } else if (row.startsWith('```')) {
        if (block === BLOCK_TEXT) {
          lines = [];
          block = BLOCK_CODE;
        } else if (block === BLOCK_CODE) {
          code(lines.join('\n'));
          lines = [];
          block = BLOCK_TEXT;
        }
      } else if (row.trim().substring(0, 3).includes('.')) {
        index(row);
      } else if (row === '') {
        if (block === BLOCK_TEXT) {
          para(lines.join(' '));
          lines = [];
        }
      } else {
        lines.push(row);
      }
    }
  };

  for (const name of config.sections) {
    section(name);
  }

  const book = printer.createPdfKitDocument({
    content,
    pageSize: 'A5',
    pageMargins: [0, 20, 0, 20],
    footer: (currentPage) => ({
      text: currentPage.toString(),
      alignment: 'center',
    }),
  });

  book.pipe(fs.createWriteStream(`release/Metaprogramming-${lang}.pdf`));
  book.end();
};

for (const lang of languages) {
  generate(lang);
}

console.log('Time spent:', new Date() - now);
