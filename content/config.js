'use strict';

module.exports = {
  sections: [
    'Abstract',
    'Index',
    '1-Introduction',
    '1-1-Approach',
    '1-2-Examples',
    '1-3-Modeling',
    '1-4-Program',
    '1-5-Decomposition',
    '1-6-Engineer',
    '1-7-Paradigms',
    '2-Basic',
    '2-1-Identifiers',
    '2-2-Types',
    '2-3-Context',
    '2-4-Blocks',
    '2-5-Procedure',
    '2-6-Function',
    '2-7-Closure',
    '2-8-Errors',
    '2-9-Monomorphic',
  ],
  languages: {
    en: require('./en/Book.js'),
    ru: require('./ru/Book.js'),
    cz: require('./cz/Book.js'),
    uk: require('./uk/Book.js'),
  },
  title: {
    bold: true,
    fontSize: 28,
    alignment: 'center',
    margin: [40, 20, 40, 0],
  },
  subtitle: {
    bold: true,
    fontSize: 14,
    alignment: 'center',
    margin: [40, 20, 40, 0],
  },
  copyright: {
    fontSize: 14,
    alignment: 'center',
    margin: [40, 60, 40, 0],
  },
  location: {
    fontSize: 14,
    alignment: 'center',
    margin: [40, 40, 40, 0],
  },
  caption: {
    fontSize: 15,
    bold: true,
    margin: [30, 5, 30, 5],
  },
  index: {
    fontSize: 11,
    margin: [30, 2, 30, 2],
    preserveLeadingSpaces: true,
  },
  para: {
    fontSize: 11,
    alignment: 'justify',
    margin: [30, 5, 30, 5],
  },
  code: {
    highlightStyle: 'Paraiso Dark', // https://highlightjs.org/static/demo/
    pdfStyle: {
      border: false,
      layout: 'noBorders',
      fontSize: 11,
      color: '#555',
      fillColor: '#eee',
      font: 'Mono',
    },
  },
  quote: {
    border: false,
    layout: 'noBorders',
    fontSize: 11,
    color: '#000',
    fillColor: '#bbb',
  },
  fonts: {
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
  },
};
