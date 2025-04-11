# Backend for Simple Web Application

This is the backend part of a simple web application that allows users to log in and view a personalized welcome page. The backend is built using Node.js and provides the necessary APIs for user authentication and session management.

## Features

- User login functionality with credentials verification.
- JWT-based authentication for secure session management.
- Stores registered users in a JSON file.

## Project Structure

- **`/routes`**: Contains API route handlers for authentication and events.
- **`/data`**: Handles reading and writing data to the JSON file.
- **`/util`**: Utility functions for authentication and validation.
- **`/events.json`**: Contains the JSON file with registered users and app data (events).

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/TagirSharipov/digit-backend.git
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm start
   ```

4. The backend will be available at `http://localhost:8080`.

## API Endpoints

- POST /signup: Handles user registration. Validates email and password, checks for existing users, and creates a new user if validation passes. Returns a JSON response with the created user and an authentication token.

- POST /login: Handles user login. Validates the provided email and password against stored credentials. Returns a JSON response with an authentication token if login is successful.

- GET /events: Fetches all events. Requires authentication (checkAuth middleware). Returns a JSON response containing the list of events.

## Important Note on Security

For testing purposes, the JWT secret key (`KEY`) is hardcoded in the `util/auth.js` file. This approach is **not secure** and should never be used in production environments. Hardcoding secrets can lead to security vulnerabilities, as anyone with access to the source code can extract the key.

### Recommended Practice for Production

- Store the secret key in environment variables or a secure secrets management system.
- Use a `.env` file for local development and load it using a library like `dotenv`.
- Ensure the `.env` file is excluded from version control by adding it to `.gitignore`.

```bash
# Example of storing the key in a .env file
JWT_SECRET=your-secure-key
```

Update the code to read the key from the environment:

```javascript
const KEY = process.env.JWT_SECRET || 'fallback-key-for-dev';
```

This ensures that the key is not exposed in the source code and can be securely managed.

## License

This project is licensed under the MIT License.
