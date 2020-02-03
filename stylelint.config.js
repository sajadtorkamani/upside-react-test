const properties = require('known-css-properties').all;

module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-prettier',
    'stylelint-config-styled-components'
  ],
  plugins: ['stylelint-order'],
  rules: {
    'order/properties-order': [...properties, '-styled-mixin0'],
    'declaration-empty-line-before': 'never'
  }
};
