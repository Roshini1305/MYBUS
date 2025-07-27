# MyBus Project

A responsive bus booking system built with Node.js, Express, and MySQL.

## Project Structure

```
MY BUS PROJECT/
├── backend/                 # Backend server files
│   ├── server.js           # Main server file
│   ├── package.json        # Backend dependencies
│   ├── package-lock.json   # Lock file for dependencies
│   ├── .env               # Environment variables
│   ├── updateHashes.js    # Utility script
│   └── TamilNadu_Bus_Routes.csv # Bus routes data
│
├── frontend/               # Frontend client files
│   ├── index.html         # Main homepage
│   ├── about.html         # About page
│   ├── busroutes.html     # Bus routes page
│   ├── contactus.html     # Contact page
│   ├── login.html         # Login page
│   ├── signup.html        # Signup page
│   ├── offer.html         # Offers page
│   ├── new.html           # New features page
│   ├── availableseats.html # Seat availability
│   ├── live_location.html  # Live tracking
│   ├── qr_code.html       # QR code page
│   ├── services.html      # Services page
│   ├── ticket.html        # Ticket page
│   ├── auth.css           # Authentication styles
│   ├── auth.js            # Authentication scripts
│   ├── login.css          # Login page styles
│   ├── package.json       # Frontend dependencies (if any)
│   ├── package-lock.json  # Frontend lock file
│   ├── server.js          # Frontend server (if needed)
│   ├── updateHashes.js    # Frontend utility
│   └── images/            # All image assets
│       ├── bus logo.png
│       ├── slider img1.jpg
│       ├── slider img2.jpg
│       ├── slider img3.jpg
│       └── ... (all other images)
│
├── .gitignore             # Git ignore file
├── .zencoder/             # Zencoder configuration
└── README.md              # This file
```

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables in `.env` file:
   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

4. Start the server:
   ```bash
   npm start
   ```

The server will start on the configured port and serve the frontend files automatically.

### Frontend

The frontend files are served statically by the backend server. No separate setup is required for the frontend as it consists of HTML, CSS, and JavaScript files that are served directly.

## Features

- User authentication (login/signup)
- Bus route management
- Seat booking system
- Live location tracking
- QR code generation
- Responsive design
- Contact and support pages

## Technologies Used

### Backend
- Node.js
- Express.js
- MySQL
- bcryptjs for password hashing
- CORS for cross-origin requests
- dotenv for environment variables

### Frontend
- HTML5
- CSS3
- JavaScript
- Font Awesome icons
- Responsive design

## API Endpoints

The backend provides various API endpoints for:
- User authentication
- Bus route management
- Booking operations
- User management

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.