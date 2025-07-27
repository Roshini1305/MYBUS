@echo off
echo Starting MyBus Project...
echo.
echo Installing backend dependencies...
cd backend
call npm install
echo.
echo Starting the server...
call npm start
pause