# web-automation-test-suite
![alt text](./playwright-logo.png)

Automation test using Playwright and JavaScript as the programming language.

## Table of Contents
1. [Getting Started](#getting-started)
2. [Folder Structure](#folder-structure)
3. [Setup](#setup)
4. [Running Tests](#running-tests)
5. [Adding New Tests](#adding-new-tests)

### Getting Started
To get started with the project, clone the repository to your local machine.

```
git clone git@github.com:fathirwafda/web-automation-test-suite.git
cd web-automation-test-suite
```

### Folder Structure
The project has the following folder structure:

```
project-root
│
├── node_modules                # Node.js modules
|
├── pages                       # All pages class and method
|    ├── CheckoutPage.js
|    ├── HomePage.js
|    ├── ProductsPage.js
|
├── playwright_report
|
├── test_results                # 
|
├── tests                       # Test directory
│   ├── checkout.test.js        
│   ├── login.test.js
|   ├── product.test.js
|
├── env.sample                  # Sample of Environment variable
├── .env                        # Put your variable and value here
├── package.json                # Node.js package manifest file
└── README.md                   # Some notes for this automation
└── playwright.config.js        # The global config
```

### Setup
1. Install Node.js: If not already installed yet, download and install Node.js from [Node.js Official Website](https://nodejs.org/).

2. Install Dependencies: Navigate to the project root directory in the terminal and run the following command to install the necessary dependencies:

```
npm install
```

3. Copy env.sample to .env as local data:

```
cp env.sample .env
```
Then fill your data/values in this file, don't forget to save.

### Running Tests
Navigate to the project root directory in the terminal and run the following command to execute the tests:

```
npx playwright test
```
![alt text](./npx-command-line.png)

### Adding New Tests
1. Create Test File: Create a new .test.js file under the relevant directory inside the tests/ folder.
2. Write Test: write your test cases in the newly created .test.js file.
3. Run Test: Use the npx test command to run your tests and validate that they are working as expected.

### Troubleshot
If you found error this `Error: Cannot find module 'dotenv'`

Install dotenv module
```
Error: Cannot find module 'dotenv'
```
