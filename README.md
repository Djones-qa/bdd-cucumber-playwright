# BDD Cucumber + Playwright Automation

![CI](https://github.com/Djones-qa/bdd-cucumber-playwright/actions/workflows/bdd-tests.yml/badge.svg)

Behavior Driven Development (BDD) test automation framework using Cucumber.js and Playwright with Gherkin scenarios. Tests are written in plain English making them readable by non-technical stakeholders.

## What is BDD?
BDD allows non-technical stakeholders to read and understand test scenarios written in plain English (Gherkin syntax). Tests serve as both executable specifications and living documentation bridging the gap between business and technical teams.

## Tech Stack
- Cucumber.js v11
- Playwright
- TypeScript
- Gherkin
- GitHub Actions CI

## Project Structure
`
bdd-cucumber-playwright/
├── features/
│   ├── login.feature          # Login Gherkin scenarios
│   ├── checkout.feature       # Checkout Gherkin scenarios
│   ├── sorting.feature        # Sorting Gherkin scenarios
│   └── step-definitions/
│       ├── world.ts           # Custom world with browser/page context
│       ├── login.steps.ts     # Login step implementations
│       ├── checkout.steps.ts  # Checkout step implementations
│       └── sorting.steps.ts   # Sorting step implementations
├── pages/
│   ├── LoginPage.ts           # Login page object
│   ├── InventoryPage.ts       # Inventory page object
│   └── CheckoutPage.ts        # Checkout page object
├── cucumber.json              # Cucumber configuration
└── .github/workflows/
    └── bdd-tests.yml          # GitHub Actions CI pipeline
`

## Test Coverage (10 scenarios / 42 steps)

### Login Feature (4 scenarios)
- Successful login with valid credentials
- Failed login with invalid credentials
- Failed login with locked out user
- Failed login with empty credentials

### Checkout Feature (4 scenarios)
- Add single product to cart
- Add multiple products to cart
- Remove product from cart
- Complete full checkout journey

### Sorting Feature (2 scenarios)
- Sort products by price low to high
- Sort products by name A to Z

## Gherkin Example
`gherkin
Feature: User Authentication

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should be on the inventory page
    And I should see the product list
`

## Run Tests
`ash
npm install
npx playwright install chromium
npm test                  # Run all tests
npm run test:login        # Login scenarios only
npm run test:checkout     # Checkout scenarios only
npm run test:sorting      # Sorting scenarios only
`

## Author
Darrius Jones - github.com/Djones-qa
