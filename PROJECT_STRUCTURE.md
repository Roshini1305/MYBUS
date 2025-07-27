# MyBus Project Structure

## ✅ Project Reorganization Complete

Your project has been successfully reorganized with separate frontend and backend folders.

## 📁 New Project Structure

```
MY BUS PROJECT/
├── 📁 backend/                    # Backend Server Files
│   ├── server.js                  # Main Express server
│   ├── package.json               # Backend dependencies
│   ├── package-lock.json          # Dependency lock file
│   ├── .env                       # Environment variables
│   ├── updateHashes.js            # Utility script
│   └── TamilNadu_Bus_Routes.csv   # Bus routes data
│
├── 📁 frontend/                   # Frontend Client Files
│   ├── 📄 HTML Pages
│   │   ├── index.html             # Homepage
│   │   ├── about.html             # About page
│   │   ├── busroutes.html         # Bus routes
│   │   ├── contactus.html         # Contact page
│   │   ├── login.html             # Login page
│   │   ├── signup.html            # Signup page
│   │   ├── offer.html             # Offers page
│   │   ├── availableseats.html    # Seat availability
│   │   ├── live_location.html     # Live tracking
│   │   ├── qr_code.html           # QR code page
│   │   ├── services.html          # Services page
│   │   ├── ticket.html            # Ticket page
│   │   ├── new.html               # New features
│   │   └── feedback.html          # Feedback page
│   │
│   ├── 🎨 Styles & Scripts
│   │   ├── auth.css               # Authentication styles
│   │   ├── auth.js                # Authentication scripts
│   │   └── login.css              # Login page styles
│   │
│   └── 📁 images/                 # All Image Assets
│       ├── bus logo.png           # Logo
│       ├── slider img1.jpg        # Slider images
│       ├── slider img2.jpg
│       ├── slider img3.jpg
│       └── ... (80+ other images)
│
├── 📄 Root Files
│   ├── package.json               # Root package.json with scripts
│   ├── README.md                  # Project documentation
│   ├── PROJECT_STRUCTURE.md       # This file
│   ├── start.bat                  # Windows startup script
│   ├── .gitignore                 # Updated git ignore
│   └── .zencoder/                 # Zencoder configuration
```

## 🚀 How to Run the Project

### Method 1: Using the startup script (Windows)
```bash
# Double-click start.bat or run in terminal:
start.bat
```

### Method 2: Using npm scripts from root
```bash
# Install backend dependencies
npm run install-backend

# Start the server
npm start
```

### Method 3: Manual backend startup
```bash
cd backend
npm install
npm start
```

## 🔧 Key Changes Made

1. **✅ Separated Backend**: All server-related files moved to `backend/` folder
   - server.js
   - package.json
   - .env
   - CSV data files

2. **✅ Separated Frontend**: All client-related files moved to `frontend/` folder
   - HTML pages
   - CSS stylesheets
   - JavaScript files
   - Images organized in `images/` subfolder

3. **✅ Updated Server Configuration**: 
   - Modified `server.js` to serve static files from `../frontend`
   - Updated routes to point to correct frontend paths

4. **✅ Cleaned Up Duplicates**:
   - Removed duplicate `public/` and `public - Copy/` folders
   - Removed duplicate files from root directory
   - Consolidated all images in `frontend/images/`

5. **✅ Added Project Management Files**:
   - Root `package.json` with helpful scripts
   - Updated `.gitignore` for new structure
   - Created documentation files
   - Added Windows startup script

## 🌐 Server Configuration

The backend server now:
- Serves static files from the `frontend/` directory
- Routes the root URL (`/`) to `frontend/index.html`
- Maintains all API endpoints for the bus booking system

## 📝 Next Steps

1. **Test the Application**: Run the server and verify all pages load correctly
2. **Update Image Paths**: If any HTML files have hardcoded image paths, update them to use `images/` folder
3. **Database Setup**: Ensure your MySQL database is configured with the credentials in `.env`
4. **Deploy**: The new structure is ready for deployment to platforms like Railway, Heroku, etc.

## 🎯 Benefits of New Structure

- **Better Organization**: Clear separation of concerns
- **Easier Maintenance**: Frontend and backend can be developed independently
- **Deployment Ready**: Structure follows industry best practices
- **Scalable**: Easy to add build processes, testing, etc.
- **Version Control**: Better git history with organized file structure