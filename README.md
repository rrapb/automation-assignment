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
cd automation-assignment
npm install
npx playwright install~~
```

## Running tests in multiple browsers and View HTML Report

Before running the commands below, make sure you're using **Node.js v20**.  
If you're using `nvm`, run: 
```bash
nvm install 20
nvm use 20
```

To run tests in different browsers, use the predefined npm scripts that set the BROWSER environment variable:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

## Running a Single Test with Report Generation
npm run test:single:report -- e2e/features/file.feature

Example:
To run the upload.feature file and generate the report in one command:
```bash
npm run test:single:report -- e2e/features/upload.feature
```

## Structure
- `features/`: Gherkin specs  
- `steps/`: Cucumber step definitions  
- `support/hooks.ts`: Initializes and cleans up the Playwright browser, context, and page before and after each scenario using Cucumber hooks
- `test-data/`: Sample files for upload
- `reports/`: Cucumber HTML reports

## What to Expect
- Clear scenarios
- Clean multi-browser execution
- Cucumber JSON & HTML reports

## CI Integration (Azure Pipelines)

If integrated into a CI/CD workflow, the following Azure Pipelines configuration can be used to automatically install dependencies, run Playwright tests, and publish test reports on failure.

> This assumes the project is already configured with all test scripts as described above.

## CI Integration (Azure Pipelines)

If integrated into a CI/CD workflow, the following Azure Pipelines configuration can be used to automatically install dependencies, run Playwright tests, and publish test reports on failure.

> This assumes the project is already configured with all test scripts as described above.

```yaml
trigger:
  branches:
    include:
      - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - script: |
      npm ci
      npx playwright install --with-deps
    displayName: 'Install dependencies and Playwright'

  - script: |
      npm run test:report
    displayName: 'Run full test suite and generate report'

  - task: PublishPipelineArtifact@1
    condition: failed()
    inputs:
      targetPath: cucumber-report
      artifactName: cucumber-report
      publishLocation: 'pipeline'
    displayName: 'Upload Cucumber report on failure'
```

## Documentation

You can find the detailed **Test Plan** in the [`docs/test-plan.md`](docs/test-plan.md) file.

