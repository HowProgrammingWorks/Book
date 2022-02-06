module.exports = {
  sections: ['Abstract', 'Index', 'Introduction'],
  languages: {
    en: require('./Book.en.js'),
    ru: require('./Book.ru.js'),
    cz: require('./Book.cz.js'),
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
    border: false,
    layout: 'noBorders',
    fontSize: 11,
    color: '#555',
    fillColor: '#EEE',
    font: 'Mono',
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
