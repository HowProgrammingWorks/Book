'use strict';

const fs = require('fs');
const PdfPrinter = require('pdfmake');

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
  }
};

const printer = new PdfPrinter(fonts);

const content = [];

content.push({
  text: 'Multi-paradigm\nApproach to\nthe Software Engineering',
  bold: true,
  fontSize: 28
});

content.push('\n\n');

content.push({
  text: 'Copyright © Timur Shemsedinov and \nHowProgrammingWorks contributors',
  fontSize: 14
});

content.push({
  text: '\nKiev, 2015-2020',
  fontSize: 14
});

const now = new Date();

const book = printer.createPdfKitDocument({
  content,
  pageSize: 'A5',
  pageMargins: [40, 50, 40, 50],
  footer: currentPage => ({
    text: currentPage.toString(),
    alignment: 'center',
  }),
});

book.pipe(fs.createWriteStream('book.pdf'));
book.end();

console.log('Time spent:', new Date() - now);
