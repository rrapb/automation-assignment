module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: ['e2e/steps/**/*.ts', 'e2e/support/**/*.ts'],
    format: ['progress', 'json:cucumber_report.json'],
    paths: ['e2e/features/**/*.feature']
  },
  single: {
    requireModule: ['ts-node/register'],
    require: ['e2e/steps/**/*.ts', 'e2e/support/**/*.ts'],
    format: ['progress', 'json:cucumber_report.json']
  }
};
