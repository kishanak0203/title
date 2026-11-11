Feature: Login functionality

  Scenario: Login with valid credentials
    Given the user is on the login page
    When the user enters a valid username and password
    And clicks the login button
    Then the home page should be displayed