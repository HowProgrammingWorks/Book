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
    '3-Data',
    '3-1-State',
    '3-2-Structs',
    '3-3-Collections',
    '3-4-Hash',
    '3-5-Deque',
    '3-6-Graph',
    '3-7-Projections',
    '3-8-Complexity',
    '4-Extended',
    '4-1-Tech-stack',
    '4-2-Dev-env',
    '4-3-Iterations',
    '4-4-Application',
    '4-5-Object',
    '4-6-Partial',
    '4-7-Chaining',
    '4-8-Mixins',
    '4-9-Dependencies',
  ],
  languages: {
    en: require('./en/Book.js'),
    ru: require('./ru/Book.js'),
    cz: require('./cz/Book.js'),
    ua: require('./ua/Book.js'),
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
    margin: [30, 0, 30, 10],
  },
  code: {
    border: false,
    layout: 'noBorders',
    fontSize: 10.2,
    color: '#555',
    fillColor: '#eee',
    font: 'Mono',
  },
  quote: {
    border: false,
    layout: 'noBorders',
    fontSize: 13,
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
