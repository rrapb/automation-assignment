Feature: New Window

  Scenario: Open a new window and verify content
    Given I navigate to "/windows"
    When I click the link to open new window
    Then I switch and see "New Window"
