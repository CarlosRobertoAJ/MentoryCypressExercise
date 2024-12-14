# Cypress Basic Mentorship Project

This repository contains the practical implementation of concepts learned during a basic Cypress mentorship program. It serves as a foundation for automation testing using Cypress, with a focus on real-world application, including various automated tests, form submissions, data generation, and more.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Introduction

This project is the result of a Cypress basic mentorship program. The primary goal is to get hands-on experience with Cypress for automation testing. It involves automating form submissions with data generated using the Faker library, handling dynamic dropdowns (for states and cities), and performing validation for various types of input fields.

## Features

- **Automated form submission** using randomly generated data (name, email, password, gender, address, birthdate, phone number).
- **Random selection** for states and cities based on Brazilian geography.
- **Phone number generation** formatted to Brazilian standards (9 digits).
- **Test scenarios** that submit data and validate successful form submission messages.

## Prerequisites

Before using this repository, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) (Node package manager)
- [Cypress](https://www.cypress.io/) (Testing Framework)
- [Faker](https://github.com/faker-js/faker) (For generating random test data)

## Setup

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/yourusername/your-repository-name.git
    cd your-repository-name
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```


3. Start Cypress:

    ```bash
    npx cypress open
    ```

   This will open the Cypress Test Runner.

## Usage

After setting up the repository and installing dependencies, you can run the tests in the Cypress Test Runner or headless mode:

- To run tests in the Test Runner, use `npx cypress open`.
- To run tests in headless mode (CLI), use:

    ```bash
    npx cypress run
    ```

## License

MIT Copyright (c) 2024

Permission is hereby granted, free of charge, to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is provided to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
