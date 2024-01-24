# Task Manager App

## Project Overview

Task Manager App is a simple task management application built using the MERN stack with integration of AWS services. It allows users to manage tasks, including features like authentication, task creation, editing, and deletion. The application leverages AWS services such as DynamoDB for storage and AWS Lambda for serverless processing.

## Features

- **User Authentication using JWT**
- **Task Management (Create, Read, Update, Delete)**
- **Integration with AWS DynamoDB and AWS Lambda**
- **Responsive and user-friendly interface built with React.js**
- **Secure implementation with encryption for sensitive information**

## Project Structure

```plaintext
Task Manager App/
|-- frontend/
|   |-- src/
|   |   |-- components/
|   |   |   |-- LoginForm.js
|   |   |   |-- LoginForm.css
|   |   |   |-- RegistrationForm.js
|   |   |   |-- RegistrationForm.css
|   |   |   |-- TaskForm.js
|   |   |   |-- TaskForm.css
|   |   |-- App.js
|   |   |-- App.css
|   |   |-- styles.css  # Common styles for shared components
|   |-- public/
|   |   |-- index.html
|-- backend/
|   |-- controllers/
|   |   |-- authController.js
|   |   |-- taskController.js
|   |-- models/
|   |   |-- User.js
|   |   |-- Task.js
|   |-- routes/
|   |   |-- authRoutes.js
|   |   |-- taskRoutes.js
|   |-- server.js
|-- aws/
|   |-- LambdaFunctions/
|   |   |-- taskValidationLambda.js
|   |-- ...
|-- README.md
|-- ...
```
Setup Instructions
1. Frontend Setup
   Install dependencies: npm install
   Start the development server: npm start
2. Backend Setup
   Install dependencies: npm install
   Start the backend server: npm start
3. AWS Setup
   Create an AWS account if you don't have one.
   Set up AWS DynamoDB for task storage.
   Create AWS Lambda functions for serverless processing.
   Configure AWS credentials for your application.
