# BDD Cucumber + Playwright Automation

![CI](https://github.com/Djones-qa/bdd-cucumber-playwright/actions/workflows/bdd-tests.yml/badge.svg)

Behavior Driven Development (BDD) test automation framework using Cucumber and Playwright with Gherkin scenarios.

## What is BDD?
BDD allows non-technical stakeholders to read and understand test scenarios written in plain English (Gherkin syntax).
Tests serve as both executable specifications and living documentation.

## Tech Stack
- Cucumber.js v11
- Playwright
- TypeScript
- Gherkin
- GitHub Actions CI

## Test Coverage (10 scenarios / 42 steps)

### Login Feature
- Successful login with valid credentials
- Failed login with invalid credentials
- Failed login with locked out user
- Failed login with empty credentials

### Checkout Feature
- Add single product to cart
- Add multiple products to cart
- Remove product from cart
- Complete full checkout journey

### Sorting Feature
- Sort products by price low to high
- Sort products by name A to Z

## Gherkin Example
`gherkin
Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username and password
    And I click the login button
    Then I should be on the inventory page
`

## Run Tests
`ash
npm test                  # Run all tests
npm run test:login        # Login scenarios
npm run test:checkout     # Checkout scenarios
npm run test:sorting      # Sorting scenarios
`

## Author
Darrius Jones - github.com/Djones-qa