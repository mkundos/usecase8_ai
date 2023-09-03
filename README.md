# usecase8_ai - React App

## General Description

Welcome to usecase8_ai! This React app is designed to make your life easier when collecting user information through a form. With a focus on simplicity and effectiveness, the form includes fields for a user's first name, last name, email, and a message. We know validation is crucial for better user experience and data integrity, so we've got you covered! The app uses `validator.js` to ensure that all fields are filled out, and also mandates that the message contains more than 10 characters.

Rest assured, the form is as user-friendly as it gets. Submitting the form is disabled until all the fields meet the validation criteria. Once everything is filled out correctly, a simple click will save the data into a Redux store. This makes it easy to manage the data down the line, whether you need to send it to a backend or use it elsewhere in your application. As an added bonus, all the stored data is displayed in a table right below the form for quick reference!

## Installation and Usage

### Pre-requisites

-   Node.js and npm installed on your machine.

### Steps

1. Clone the repository to your local machine.

    ```bash
    git clone https://github.com/mkundos/usecase8_ai.git
    ```

2. Navigate into the directory where the `usecase8_ai` folder is located.

    ```bash
    cd path/to/repository/usecase8_ai
    ```

3. Install the required packages.

    ```bash
    npm install
    ```

4. Start the development server.
    ```bash
    npm start
    ```

This should automatically open the application in your default web browser at `http://localhost:3000/`. If it doesn't, manually open the link in your browser.

## Features

-   Form Validation: All fields are validated using `validator.js`.
-   Redux Store: On form submission, data is stored into a Redux store for easier data management.
-   Data Display: All stored data is shown in a table format right under the form for easy access and review.

## Contributing

Feel free to open issues and pull requests. We appreciate your feedback!
