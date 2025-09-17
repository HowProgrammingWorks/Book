'use strict';

const init = require('eslint-config-metarhia');

module.exports = [
  ...init,
  {
    ignores: [
      'node_modules/**',
      'release/**',
      'fonts/**',
      'book.pdf',
      'eslint.config.*',
      'prettier.config.*',
    ],
  },
];
