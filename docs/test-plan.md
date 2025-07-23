#  Test Plan – UI Automation for "The Internet" Website

##  Objective

To validate the core functionalities of [The Internet](https://the-internet.herokuapp.com/) website using an automated testing solution with [Playwright](https://playwright.dev/) and [Cucumber](https://cucumber.io/) for behavior-driven development (BDD).

This project ensures that critical user interactions behave consistently across different browsers.

---

##  Scope of Testing

| Feature            | Scenario Description                                                              |
|--------------------|------------------------------------------------------------------------------------|
| File Upload        | Upload a file and verify the success confirmation                                 |
| Drag & Drop        | Drag element A onto element B and validate the change                             |
| JavaScript Alerts  | Handle JS Alert, JS Confirm, and JS Prompt interactions and verify responses      |
| New Window         | Click a link to open a new window and verify its content                          |
| Hover Profiles     | Hover over profile avatars and validate name visibility                           |
| Checkboxes         | Select a specific checkbox and verify it is checked                               |

Each test is designed to run independently and validate one specific functionality at a time.

---

##  Tools and Technologies

| Tool            | Purpose                          |
|------------------|----------------------------------|
| Playwright       | End-to-end browser automation    |
| Cucumber         | BDD framework for Gherkin syntax |
| TypeScript       | Type-safe scripting              |

---

## Test Execution Strategy

-  **Tests are atomic**: Each scenario is self-contained with its own setup and validation.
-  **Multi-browser execution**: Tests run on Chromium, Firefox, and WebKit using Playwright.
-  **Tag-based filtering**: Scenarios can be grouped and executed via tags.
-  **Reusable steps**: Gherkin steps are modular and designed for high reuse.

---

## Test Data

- **File Upload**: Uses `testfile.txt` located in the test-data folder.

---

## Acceptance Criteria

| Criteria                             |  |
|--------------------------------------|--|
| All tests run successfully           |  |
| Cross-browser compatibility verified |  |
| Feature coverage matches requirements|  |

---

## Test Results

- Screenshots and traces captured on failure (configurable via Playwright settings)
- HTML or JSON reports can be added for enhanced visibility

---

## Notes

- Tests are written in BDD style for better readability and collaboration.
- Clean project structure ensures scalability for future additions.

---

