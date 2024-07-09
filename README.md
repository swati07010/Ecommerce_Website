E-commerce Website

Overview
This is a comprehensive eCommerce website with distinct frontend, backend, and admin modules. The project utilizes modern web technologies to ensure user-friendly product management and smooth transactions.

Technologies Used
Frontend:


React.js
HTML
CSS
JavaScript
Bootstrap
Backend:

Express.js
MongoDB Atlas
Multer
Mongoose
CORS
Features
User Interface (Frontend)
User Authentication:

Users can sign up, log in, and log out.
User information is securely stored in MongoDB Atlas.
Product Browsing:

Users can view products categorized into Men, Women, and Children sections.
Product Management:

Authenticated users can add products.
Products are stored with user ID references for tracking.
Admin Interface
Product Management:
Admins can add, edit, and delete products, including images, categories (Men, Women, Kids), old prices, and new prices.
All product information managed by the admin is reflected in the frontend for users to see.
Backend
Database Management:

All user and product information is stored and managed using MongoDB Atlas.
File Uploads:

Implemented using Multer for handling product images.
Server Management:

Developed using Express.js, ensuring smooth communication between frontend and backend.
Cross-Origin Resource Sharing (CORS):

Enabled to allow seamless interaction between frontend and backend.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/ecommerce-website.git
Install dependencies:

Navigate to the frontend directory and install dependencies:

bash
Copy code
cd frontend
npm install
Navigate to the backend directory and install dependencies:

bash
Copy code
cd backend
npm install
Set up MongoDB Atlas:

Create a MongoDB Atlas account and set up a cluster.
Replace the MongoDB connection string in the backend configuration with your MongoDB Atlas connection string.
Run the application:

Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend server:

bash
Copy code
cd frontend
npm start
Usage
Navigate to the frontend URL to access the user interface.
Users can sign up, log in, browse products, and manage their product listings.
Admins can log in to the admin interface to manage product information.
Contributions
Contributions are welcome! Please fork the repository and submit pull requests.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

Contact
For any inquiries or feedback, please contact swatisingh070103@gmail.com.

This README file provides a detailed description of your project, its features, and instructions for installation and usage.








