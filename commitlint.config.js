// Commitlint configuration

// const czConfig = require('./changelog.config');

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    // 'header-max-length': [2, 'always', czConfig.maxHeaderLength],
    // 'header-min-length': [2, 'always', czConfig.minHeaderLength],
    // 'type-enum': [2, 'always', czConfig.list],
    'type-enum': [2, 'always', ['qifei', 'wuhu', 'feat', 'fix']],
  },
};
