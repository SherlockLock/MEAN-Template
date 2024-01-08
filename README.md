# MEAN-Template
A starting point for any MEAN stack application.

## About
This repository serves as a quick start for a MEAN Stack application. It includes all of the boilerplate code required to start customizing your own app and has the features listed in the following section.

## Features

This application has minimal fuctionality as it is intended to be built upon for any functionality needed. The frontend includes a generic template ready to have information related to a website filled in. The backend supports functionality regarding authorization, user account management, and admin user management.

### Frontend

1. Home Page                       VIEW CREATED - NO FUNCTIONALITY IMPLEMENTED
2. Login Page                      VIEW CREATED - NO FUNCTIONALITY IMPLEMENTED
3. Signup Page                     VIEW CREATED - NO FUNCTIONALITY IMPLEMENTED
4. Password Reset                  VIEW CREATED - NO FUNCTIONALITY IMPLEMENTED
5. Cookie Request Pop-Up           NOT IMPLEMENTED
6. User Dashboard                  NOT IMPLEMENTED
7. Admin Dashboard                 NOT IMPLEMENTED

### Backend

1. Authorization                   NOT IMPLEMENTED
2. Serve Application               NOT IMPLEMENTED
3. Account Routes                  NOT IMPLEMENTED
4. Admin Routes                    NOT IMPLEMENTED

## Quick Start

### Backend Setup

Open a terminal window and navigate to the Backend folder
1. Install npm
2. Via npm, ensure you have the following packages installed:
    - express
    - morgan
    - dotenv

### Frontend Setup

TODO

# Frontend Development

This frontend was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.
The following sections contain information in the pregenerated README file that angular creates as well as updated information from me.

## Creating a new component

1. Navigate to the /frontend/app in the terminal
2. Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

NOTE: If you are trying to test your backend with your frontend, you must have an instance of your backend running as well. See the "Backend Development" section for more information.


## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

This command is used to create a deployable single page application your backend server can send.

NOTE: I have created a script called app-build.sh that will run this command and place it in the correct folder for the backend to serve to any client. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# Backend Development

TODO

getting setup
Starting mongo
Starting Express
Prod vs Dev - Where the app is and when to build using app-build.sh

# Deploying to the Web