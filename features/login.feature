Feature: User Authentication
  As a user of SauceDemo
  I want to be able to login and logout
  So that I can access the application securely

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be on the inventory page
    And I should see the product list

  Scenario: Failed login with invalid credentials
    When I enter username "invalid_user" and password "wrong_pass"
    And I click the login button
    Then I should see an error message

  Scenario: Failed login with locked out user
    When I enter username "locked_out_user" and password "secret_sauce"
    And I click the login button
    Then I should see an error message

  Scenario: Failed login with empty credentials
    When I click the login button
    Then I should see an error message
