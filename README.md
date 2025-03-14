# Accessibility Testing with Playwright
Demo Typescript UI project to demonstrate how to use Playwright in an Accessibility context.
___

## Requirements
- [Node.js](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [JDK](https://jdk.java.net/) => needed for Allure reporting

## Installation
- Installing Playwright
```
npm init playwright@latest
```

- Installing project dependencies
```
npm install
```

## Running tests & Playwright commands
Navigate to root directory, so you can run several commands:

- Runs end-to-end tests
```
  npx playwright test
```

-  Starts interactive UI mode  
```
  npx playwright test --ui
```

- Runs tests only on Chrome
```
  npx playwright test --project=chromium
```

- Runs tests in a specific file    

```
  npx playwright test landing-page.spec.ts
```

- Runs tests in debug mode

```
  npx playwright test --debug
``` 

- Auto generate tests with Codegen

```
  npx playwright codegen
```

## Reporting

- To open HTML report last run

```
  npx playwright show-report
```

- Generate Allure report

```
allure serve allure_results
```
  
## Check out the following files

- .\e2e\example.spec.ts - Example end-to-end test
- .\tests-examples\demo-todo-app.spec.ts - Demo Todo App end-to-end tests
- .\playwright.config.ts - Playwright Test configuration

## Documentation

[Playwright Accessibility Testing](https://playwright.dev/docs/accessibility-testing)
___


