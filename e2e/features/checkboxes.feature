Feature: Checkboxes

  Scenario: Check the first checkbox
    Given I navigate to "/checkboxes"
    When I check the first checkbox
    Then it should be checked
