# Investment Platform

## Overview
This project is a web-based investment platform that allows users to explore and manage investment opportunities conveniently. It includes features such as user registration, login, stock browsing, adding stocks to watchlists, managing holdings, and simulating transactions.

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, EJS (Embedded JavaScript templates)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Bcrypt.js for password hashing
- **Other**: Mongoose for MongoDB object modeling

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
2. Install dependencies:
   ```bash
   npm install
## Set up MongoDB
1. Install MongoDB if not already installed.
2. Create a MongoDB database named `Login-tut`.
3. Create a connection in `Login-tut` as `users`.

## Usage
1. **Start the server:**
    ```bash
    nodemon src/index.js
    ```
2. Open your browser and go to [http://localhost:8000](http://localhost:8000) to access the application.

## File Structure
- **index.js**: Entry point of the application.
- **config.js**: Configuration file for connecting to the MongoDB database.
- **public/**: Contains static assets like CSS stylesheets.
- **views/**: Contains EJS templates for rendering HTML pages.
- **README.md**: Documentation for the project.

## Contributing
Contributions are welcome! Please follow the guidelines outlined in `CONTRIBUTING.md`.

## License
This project is licensed under the [MIT License](LICENSE).
