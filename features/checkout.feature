Feature: Shopping Cart and Checkout
  As a logged in user
  I want to add products to cart and checkout
  So that I can purchase items

  Background:
    Given I am logged in as "standard_user"

  Scenario: Add single product to cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart count should be "1"

  Scenario: Add multiple products to cart
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    Then the cart count should be "2"

  Scenario: Remove product from cart
    When I add "Sauce Labs Backpack" to the cart
    And I add "Sauce Labs Bike Light" to the cart
    And I remove "Sauce Labs Backpack" from the cart
    Then the cart count should be "1"

  Scenario: Complete full checkout journey
    When I add "Sauce Labs Backpack" to the cart
    And I go to the cart
    And I proceed to checkout
    And I fill in first name "Darrius" last name "Jones" zip "44870"
    And I continue the checkout
    And I finish the order
    Then I should see the order confirmation
