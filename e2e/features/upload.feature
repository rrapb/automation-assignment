Feature: File Upload

  Scenario: Upload a file and verify success message
    Given I navigate to "/upload"
    When I upload "testfile.txt"
    Then I should see upload message "File Uploaded!"
