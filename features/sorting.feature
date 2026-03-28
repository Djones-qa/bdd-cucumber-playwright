Feature: Product Sorting
  As a logged in user
  I want to sort products
  So that I can find items easily

  Background:
    Given I am logged in as "standard_user"

  Scenario: Sort products by price low to high
    When I sort products by "lohi"
    Then products should be sorted by price ascending

  Scenario: Sort products by name A to Z
    When I sort products by "az"
    Then products should be sorted by name ascending
