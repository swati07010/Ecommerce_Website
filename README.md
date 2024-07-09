# E-commerce Website

## Overview
This is a comprehensive eCommerce website with distinct frontend, backend, and admin modules. The project utilizes modern web technologies to ensure user-friendly product management and smooth transactions.

## Technologies Used

**Frontend:**
- React.js
- HTML
- CSS
- JavaScript
- Bootstrap
- react-router-dom
- Vite


**Backend:**
- Express.js
- MongoDB Atlas
- Multer
- Mongoose
- CORS
- jwt
- path
- jsonwebtoken




## Features

### User Interface (Frontend)

- **User Authentication:**
  - Users can sign up, log in, and log out.
  - User information is securely stored in MongoDB Atlas.

- **Product Browsing:**
  - Users can view products categorized into Home, Men, Women, and Children sections.

- **Product Management:**
  - Authenticated users can add products.

### Admin Interface

- **Product Management:**
  - Admins can add, edit, and delete products, including images, categories (Men, Women, Kids), old prices, and new prices.
  - All product information managed by the admin is reflected in the frontend for users to see.

### Backend

- **Database Management:**
  - All user and product information is stored and managed using MongoDB Atlas.

- **File Uploads:**
  - Implemented using Multer for handling product images.

- **Server Management:**
  - Developed using Express.js, ensuring smooth communication between frontend and backend.

- **Cross-Origin Resource Sharing (CORS):**
  - Enabled to allow seamless interaction between frontend and backend.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/swati07010/Ecommerce_Website
