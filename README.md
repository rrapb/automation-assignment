# The Internet UI Automation Suite

## Tech Stack
- Playwright + TypeScript
- Cucumber for BDD
- Multi-browser (Chromium, Firefox, WebKit)

## Test Scope
1. File Upload  
2. Drag&Drop  
3. JS Alerts (alert/confirm/prompt)  
4. New Window  
5. Hover Effect  
6. Checkboxes

## Setup
```bash
git clone https://github.com/rrapb/automation-assignment.git
cd the-internet-ui-tests
npm install
npx playwright install
```

## Run Locally
```bash
npm test
```
## Running tests in multiple browsers

To run tests in different browsers, use the predefined npm scripts that set the BROWSER environment variable:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```


## Structure
- `features/`: Gherkin specs  
- `steps/`: Cucumber step definitions  
- `support/hooks.ts`: Initializes and cleans up the Playwright browser, context, and page before and after each scenario using Cucumber hooks  
- `support/world.ts`: Defines the custom World interface to expose Playwright's browser, context, and page to all step definitions  
- `test-data/`: Sample files for upload  

## What to Expect
- Clear scenarios
- Clean multi-browser execution
