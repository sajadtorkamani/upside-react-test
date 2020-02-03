module.exports = {
  'src/*.{ts,tsx,js,jsx}': [
    'prettier --write', // fix formatting
    'stylelint --fix', // fix style issues where possible
    'git add', // Re-stage files
    'stylelint', // check for style issues
    'eslint --max-warnings=5' // check for code issues
  ],
  '*.{md,html}': ['prettier --write', 'git add']
};
