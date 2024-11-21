Database Viewer Project
A web application that allows users to view and manage data from various tables in a database, such as Users, Products, Orders, and Order Details.

Table of Contents
Project Overview
Technologies Used
Setup Instructions
Backend Setup
Frontend Setup
Database Setup
Challenges Faced
Contributing
License
Project Overview
This project allows users to view data from multiple tables in a database via a web interface. It includes a backend built with Node.js and Express, a frontend with HTML and JavaScript, and connects to a MySQL database for data storage.

Users can:

View a list of users, products, orders, and order details from the database.
Manage the data dynamically through an easy-to-use interface.
Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MySQL, Sequelize ORM
Other: Postman (for API testing), Git (version control)
Setup Instructions
Backend Setup
Clone the repository:

bash
Copy code
git clone https://github.com/Samzzycares1/database-viewer.git
Navigate to the project directory:

bash
Copy code
cd database-viewer
Install backend dependencies:

bash
Copy code
npm install
Configure the environment variables:

Create a .env file in the root directory of the project.
Add the following environment variables (update with your credentials):
bash
Copy code
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASS=your_database_password
DB_NAME=your_database_name
Run the backend server:

bash
Copy code
npm start
Frontend Setup
Navigate to the frontend directory (if separate from the backend):

bash
Copy code
cd frontend
Install frontend dependencies:

bash
Copy code
npm install
Run the frontend application:

bash
Copy code
npm start
Database Setup
Make sure MySQL (or your database of choice) is installed and running.

Create a database:

sql
Copy code
CREATE DATABASE your_database_name;
Run migrations to create the necessary tables (if using Sequelize or similar ORM):

bash
Copy code
npm run migrate
(Optional) If you need to seed the database with sample data:

bash
Copy code
npm run seed
Challenges Faced
Database Connection Issues: Initially, connecting to the database was tricky due to network configurations. The issue was resolved by configuring the correct database credentials in the .env file.
CORS Issues: During development, the frontend couldn't communicate with the backend due to Cross-Origin Resource Sharing (CORS) issues. This was fixed by enabling CORS on the backend using the cors middleware.
API Fetching: There were some issues with fetching data from the backend to the frontend, mostly related to incorrect API endpoints or missing data handling logic. The solution involved debugging the API responses and ensuring the correct routes were set up.
Contributing
Feel free to fork this repository and contribute! Please open an issue for any bugs or enhancements, and create a pull request if you have changes you'd like to contribute.

Steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add new feature').
Push to your forked repository (git push origin feature/your-feature).
Create a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Making Your Code Open-Source on GitHub
Create a repository on GitHub:

Go to GitHub, and create a new repository for your project.
Follow the instructions to initialize your repository.
Push your code to GitHub:

After committing your changes locally, push your code to your GitHub repository:
bash
Copy code
git remote add origin https://github.com/Samzzycares1/database-viewer.git
git branch -M main
git push -u origin main