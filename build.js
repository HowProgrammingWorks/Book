'use strict';

const fs = require('fs');
const PdfPrinter = require('pdfmake');

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
  Mono: {
    normal: 'fonts/RobotoMono-Regular.ttf',
    bold: 'fonts/RobotoMono-Medium.ttf',
    italics: 'fonts/RobotoMono-Italic.ttf',
    bolditalics: 'fonts/RobotoMono-MediumItalic.ttf',
  },
};

const printer = new PdfPrinter(fonts);

const content = [];

content.push({
  text: 'Multi-paradigm and\nMeta-programming in\nthe Software Engineering',
  bold: true,
  fontSize: 28,
  margin: [40, 20, 40, 0],
});

content.push({
  text: 'Copyright © Timur Shemsedinov and \nHowProgrammingWorks contributors',
  fontSize: 14,
  margin: [40, 40, 40, 0],
});

content.push({
  text: 'Kiev, 2015-2022',
  fontSize: 14,
  margin: [40, 40, 40, 0],
});

const pageBreak = (s) => content.push({ text: '', pageBreak: `${s}` });

const caption = (s) => {
  content.push({
    text: s,
    fontSize: 15,
    bold: true,
    margin: [30, 5, 30, 5],
  });
};

const index = (s) => {
  content.push({
    text: s,
    fontSize: 12,
    margin: [30, 2, 30, 2],
    preserveLeadingSpaces: true,
  });
};

const para = (s) => {
  content.push({
    text: s,
    fontSize: 12,
    alignment: 'justify',
    margin: [30, 5, 30, 5],
  });
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
    border: false,
    layout: 'noBorders',
    fontSize: 12,
    color: '#555',
    fillColor: '#EEE',
    font: 'Mono',
  });
};

pageBreak('before');

const abstract = fs.readFileSync('content/Abstract.en.md', 'utf8');
const text = abstract.replace('#', '').split('\n');
caption(text.shift());
para(text.join(' '));

pageBreak('before');

const src = fs.readFileSync('content/Index.en.md', 'utf8');
const data = src.split('\n');

for (let i = 0; i < data.length; i++) {
  const row = data[i];
  if (row.startsWith('#')) {
    const text = row.replace('#', '');
    caption(text);
  } else if (row.includes('. ')) {
    index(row);
  } else {
    para(row);
  }
}

/*
para('Consider following:');
code(`const id = (x) => x;

// Usage

const res = id(5);
console.log({ res });`);
*/

const now = new Date();

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
