'use strict';

const now = new Date();

const fs = require('fs');
const path = require('path');
const metavm = require('metavm');
const PdfPrinter = require('pdfmake');

const BLOCK_TEXT = 1;
const BLOCK_CODE = 2;
const BLOCK_LIST = 3;

const readConfig = async (fileName) => {
  const configFile = path.join(__dirname, fileName);
  const { exports } = await metavm.readScript(configFile);
  return exports;
};

const generate = async (config, lang) => {
  const content = [];
  const front = await readConfig(`${lang}/Book.js`);

  content.push({ text: front.title, ...config.title });
  content.push({ text: front.subtitle, ...config.subtitle });
  content.push({ text: front.copyright, ...config.copyright });
  content.push({ text: front.location, ...config.location });

  const parseInline = (s) => {
    return s.split('`').map((text, i) => {
      const style = i % 2 === 0 ? 'normal' : 'bold';
      return { text, style };
    });
  };

  const caption = (s) => {
    const text = s.replace(/#/g, '');
    const page = s.startsWith('# ') ? { pageBreak: 'before' } : {};
    content.push({ text, ...config.caption, ...page });
  };

  const index = (s) => {
    content.push({ text: s, ...config.index });
  };

  const para = (s) => {
    const sections = parseInline(s).map((content) => ({
      ...content,
      alignment: 'justify',
    }));
    content.push({ text: sections, ...config.para });
  };

  const code = (text) => {
    content.push({
      table: {
        widths: ['*'],
        body: [
          [
            {
              margin: [30, 5, 10, 5],
              text,
              preserveLeadingSpaces: true,
            },
          ],
        ],
      },
      ...config.code,
    });
  };

  const quote = (s) => {
    const text = s.replace('> ', '');
    content.push({
      table: {
        widths: ['*'],
        body: [[{ margin: [30, 5, 30, 5], text }]],
      },
      ...config.quote,
    });
  };

  const list = (rows) => {
    const listItems = rows.map((row) => {
      const text = row.replace('- ', '');
      return { text: parseInline(text) };
    });

    content.push({ ul: listItems, ...config.list });
  };

  const section = (name) => {
    const src = fs.readFileSync(`content/${lang}/${name}.md`, 'utf8');
    const rows = src.split('\n');
    let block = BLOCK_TEXT;
    let lines = [];
    for (const row of rows) {
      const numbering = row.trim().substring(0, 3).includes('.');
      if (block === BLOCK_TEXT && row.startsWith('#')) {
        caption(row);
      } else if (block === BLOCK_TEXT && row.startsWith('>')) {
        quote(row);
      } else if (row.startsWith('```')) {
        if (block === BLOCK_TEXT) {
          lines = [];
          block = BLOCK_CODE;
        } else if (block === BLOCK_CODE) {
          code(lines.join('\n'));
          lines = [];
          block = BLOCK_TEXT;
        }
      } else if (block === BLOCK_TEXT && numbering) {
        index(row);
      } else if (block === BLOCK_TEXT && row === '') {
        para(lines.join(' '));
        lines = [];
      } else if (block === BLOCK_LIST && row === '') {
        list(lines);
        block = BLOCK_TEXT;
        lines = [];
      } else if (row.startsWith('- ')) {
        block = BLOCK_LIST;
        lines.push(row);
      } else {
        lines.push(row);
      }
    }
  };

  for (const name of config.sections) {
    section(name);
  }

  const printer = new PdfPrinter(config.fonts);
  const book = printer.createPdfKitDocument({
    content,
    pageSize: 'A5',
    pageMargins: [0, 20, 0, 20],
    footer: (currentPage) => ({
      text: currentPage.toString(),
      alignment: 'center',
    }),
    styles: {
      normal: {},
      bold: { bold: true },
    },
  });

  book.pipe(fs.createWriteStream(`release/Metaprogramming-${lang}.pdf`));
  book.end();
};

const main = async () => {
  const config = await readConfig('config.js');
  for (const lang of config.languages) {
    await generate(config, lang);
  }
  console.log('Time spent:', new Date() - now);
};

main();
