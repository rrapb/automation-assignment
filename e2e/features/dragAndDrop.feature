Feature: Drag and Drop

  Scenario: Drag A onto B
    Given I navigate to "/drag_and_drop"
    When I drag box A onto box B
    Then their positions should have swapped
