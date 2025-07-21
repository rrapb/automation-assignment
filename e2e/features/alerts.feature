Feature: JavaScript Alerts

  Scenario: Handle JS Alert
    Given I navigate to "/javascript_alerts"
    When I accept the JS alert
    Then the alert message should be "I am a JS Alert"
    And I should see the JS alert result "You successfully clicked an alert"

  Scenario: Handle JS Confirm - Accept
    Given I navigate to "/javascript_alerts"
    When I accept the JS confirm
    Then the alert message should be "I am a JS Confirm"
    And I should see the JS alert result "You clicked: Ok"

  Scenario: Handle JS Confirm - Dismiss
    Given I navigate to "/javascript_alerts"
    When I dismiss the JS confirm
    Then the alert message should be "I am a JS Confirm"
    And I should see the JS alert result "You clicked: Cancel"

  Scenario: Handle JS Prompt - Accept
    Given I navigate to "/javascript_alerts"
    When I enter "Playwright Test" into the prompt and accept
    Then the alert message should be "I am a JS prompt"
    And I should see the JS alert result "You entered: Playwright Test"

  Scenario: Handle JS Prompt - Dismiss
    Given I navigate to "/javascript_alerts"
    When I dismiss the JS prompt
    Then the alert message should be "I am a JS prompt"
    And I should see the JS alert result "You entered: null"
