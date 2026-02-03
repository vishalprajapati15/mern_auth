# MERN Stack Authentication System

This project is a comprehensive **user authentication system** developed using the **MERN stack** (MongoDB, Express, React, and Node.js). It incorporates modern web application security features, including **JWT-based authentication**, **email verification**, and **password reset** capabilities using secure six-digit OTPs.

## Features

*   **Secure User Registration & Login**: Allows users to create accounts and log in securely.
*   **JWT Authentication**: Implements JSON Web Tokens for session management, with tokens stored in **HTTP-only cookies** to prevent XSS attacks.
*   **Email Verification**: Ensures account authenticity by sending a six-digit OTP to the user's registered email address.
*   **Password Reset**: Provides a mechanism for users to reset forgotten passwords via a secure OTP.
*   **Dynamic UI State**: The frontend updates dynamically to show user-specific information (like names) or verification prompts depending on the authentication status.
*   **Professional Email Templates**: Includes HTML-based email templates for OTP delivery and welcome messages.

## Tech Stack

### Backend
*   **Node.js & Express**: Used to build the server and RESTful APIs.
*   **MongoDB & Mongoose**: Used for database storage and schema modelling for user data.
*   **JsonWebToken (JWT)**: For generating secure authentication tokens.
*   **BcryptJS**: Used for encrypting and hashing user passwords before storage.
*   **Nodemailer**: Facilitates sending automated emails for verification and password resets.
*   **Cookie-parser**: Used to handle cookies within API responses.

### Frontend
*   **React (Vite)**: For building a fast, responsive user interface.
*   **Tailwind CSS**: Utilised for styling the application with utility-first classes.
*   **React Router Dom**: For managing navigation and defining protected routes.
*   **Axios**: For performing HTTP requests to the backend server.
*   **React Toastify**: For displaying interactive toast notifications to users.
*   **Context API**: For managing global application states like user data and login status.

## Project Structure
The project is organised into two primary directories:
*   **`server/`**: Contains the backend code, including controllers, database models, and API routes.
*   **`client/`**: Contains the React frontend code, including pages and reusable components.

## Installation and Setup

### 1. Backend Setup
1.  Navigate to the `server` directory.
2.  Install required dependencies:
    ```bash
    npm install
    ``` 
3.  Create a `.env` file in the `server` folder and add the following variables:
    *   `MONGODB_URI`: Your MongoDB Atlas connection string.
    *   `PORT`: Port number (e.g., 4000).
    *   `JWT_SECRET`: A secret key for token encryption.
    *   `NODE_ENV`: Set to `development` or `production`.
    *   `SMTP_USER`: Your SMTP provider username.
    *   `SMTP_PASS`: Your SMTP provider password.
    *   `SENDER_EMAIL`: The email address used to send system notifications.
4.  Start the backend server:
    ```bash
    npm run server
    ```

### 2. Frontend Setup
1.  Navigate to the `client` directory.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `client` folder and add:
    *   `VITE_BACKEND_URL`: `http://localhost:4000` (or your backend port).
4.  Launch the development server:
    ```bash
    npm run dev
    ```

## API Endpoints

### Authentication Routes (`/api/auth`)
*   `POST /register`: Register a new user and send a welcome email.
*   `POST /login`: Authenticate a user and set a cookie token.
*   `POST /logout`: Log out the user and clear the authentication cookie.
*   `POST /send-verify-otp`: Send a six-digit verification OTP to the user's email.
*   `POST /verify-account`: Verify the email account using the provided OTP.
*   `GET /is-auth`: Check if the current user is authenticated.
*   `POST /send-reset-otp`: Initiate the password reset process by sending an OTP.
*   `POST /reset-password`: Reset the user's password using the OTP and new password.

### User Routes (`/api/user`)
*   `GET /data`: Retrieve the authenticated user's name and verification status.