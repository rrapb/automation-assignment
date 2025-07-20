import { defineConfig } from '@cucumber/cucumber';

export default defineConfig({
  default: {
    require: ['e2e/steps/**/*.ts', 'e2e/utils/world.ts'],
    format: ['progress', 'json:cucumber_report.json']
  }
});
