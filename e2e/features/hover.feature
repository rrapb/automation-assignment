Feature: Hover Menus

  Scenario: Hover over profile 1 shows name
    Given I navigate to "/hovers"
    When I hover over profile 1
    Then I should see "name: user1"

  Scenario: Hover over profile 2 shows name
    Given I navigate to "/hovers"
    When I hover over profile 2
    Then I should see "name: user2"

  Scenario: Hover over profile 3 shows name
    Given I navigate to "/hovers"
    When I hover over profile 3
    Then I should see "name: user3"
