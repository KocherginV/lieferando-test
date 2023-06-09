# lieferando-test
Test assignments from Lieferando on Test Automation role

## Task description:
### Part 1:

The career portion (listing of career opportunities in Just Eat Takeaway) is an important part of
Just Eat Takeaway platform in order to serve new job opportunities and automated testing is an
essential part of software development. Please create the following two test cases:

**Test Case 1**
* Open https://careers.justeattakeaway.com/global/en/home
* Search for Job Title “Test”
* Do not enter location, “Search” for results
* Verify search results’ locations vary
* Then Refine your search from left panel to Country “Netherlands”
* Verify search results’ location is Netherlands only

**Test Case 2**
* Open https://careers.justeattakeaway.com/global/en/home
* Click on “Search for Job Title” and select “Sales” among Job Categories
* Scroll to “Refine your search”
* Verify Category “Sales” is selected and search results number is matching
* Then Refine your search from left panel to Country “Germany”
* Verify number of search result is matching and category is “Sales” on all results

### Solution & Explanation:
This repository showcases an implementation of a test assignment using [Playwright](https://playwright.dev/), a powerful end-to-end testing tool. The tests are structured using the [Page Object Model](https://playwright.dev/docs/pom), providing a scalable and maintainable approach.
Additionally, this implementation utilizes [TypeScript](https://www.typescriptlang.org/) as the programming language of choice. TypeScript brings an extra layer of safety to JavaScript by adding static typing. It helps improve code quality, boosts developer productivity, and offers excellent tooling support. 

Inside the `src` directory, you will find three folders:

`helpers`: This folder contains helper file that provide reusable functions and utilities to support the test automation efforts.

`pages`: Here, you will find page objects that encapsulate the locators and page structure. Each file represents a specific web page or component, making it easier to maintain and update the tests as the application evolves.

`tests`: The test folder includes the test files themselves (or single file in this case). These files utilize the page objects and helper functions to perform end-to-end testing scenarios, ensuring the quality and functionality of the software.

By leveraging Playwright and adhering to the Page Object Model, this repository provides a robust foundation for writing reliable and maintainable automated tests. The clearly organized structure within the src directory enables better collaboration, improved test maintenance, and facilitates future test expansion and enhancements.

### How to run tests:
This can be done in two ways (pulling repo needs to be done beforehand):
 * By having Playwright VSCode [extention](https://playwright.dev/docs/getting-started-vscode) installed
 * By executing CLI command `npx playwright test` inside of project's folder

If you run tests using CLI command, browser page with results will be opened automatically when tests are executed. If you used VSCode extention, results would be displayed directly in the IDE. 


### Part 2:
Part 2
The Backend portion is just as vital, and also requires automated testing as part of the software
development. Please create automation tests for CRUD operations from the link below:
https://restful-booker.herokuapp.com/apidoc/index.html

### Solution & Explanation:
`api` folder inside of `src` contains implementation of API tests. It utilizes [TypeScript](https://www.typescriptlang.org/), [Axios](https://axios-http.com/), and [Jest](https://jestjs.io/) for a powerful and efficient testing solution.

TypeScript adds static typing to JavaScript, improving code quality and developer productivity. Axios is a popular HTTP client library that simplifies API communication. Jest is a feature-rich testing framework for unit testing and automation.

With TypeScript, Axios, and Jest, this implementation delivers a comprehensive and reliable testing solution, enabling efficient development and ensuring high-quality software.

It was decided as a Minimum Viable Product solution just to automate CRUD operations based on endpoints, without going to detailed validation and/or edge cases, that could be implemented, especially considering relativly low cost of API tests.

### How to run tests:
This can be done in two ways (pulling repo needs to be done beforehand):
 * By having Jest VSCode [extention](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest) installed
 * By executing CLI command `npx jest` inside of project's folder

If you run tests using CLI command, test results would be displayed in the CLI. If you used VSCode extention, results would be displayed directly in the IDE. 
