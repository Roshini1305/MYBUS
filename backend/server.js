const crypto = require("crypto");
const express = require("express");
const mysql = require("mysql2");
const path = require('path');
const bcrypt = require('bcryptjs'); // Switched to bcryptjs for Railway compatibility
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load .env

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: [
    'https://mybus-frontend.vercel.app',
    'https://mybus-frontend-96hkiskrq-roshini-senthilkumars-projects.vercel.app',
    'http://localhost:3000', // For local development
    'http://localhost:3001'  // Alternative local port
  ],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Serve static files from 'frontend' folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// MySQL connection pool
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test DB connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("❌ MySQL Pool Connection Error:", err);
  } else {
    console.log("✅ MySQL Pool Connected");
    connection.release();
  }
});

// Login API
app.post('/login', async (req, res) => {
  console.log("🔹 Login Route Hit");

  const { email, password } = req.body;
  console.log("🔹 Entered Email:", email);
  console.log("🔹 Entered Password:", password);

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error("Database query error:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    console.log("🔹 Query Results:", results);

    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    const user = results[0];
    console.log("🔹 Stored Hashed Password:", user.password);

    const match = await bcrypt.compare(password, user.password);
    console.log("🔹 Password Match Result:", match);

    if (!match) {
      return res.status(401).json({ message: "Invalid email or password!" });
    }

    res.json({ message: "Login successful!", userId: user.id });
  });
});

// Signup API
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("Received Data:", req.body);

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, hashedPassword], (err, result) => {
      if (err) {
        console.error("❌ MySQL Error:", err);
        return res.status(500).json({ message: "Signup failed!" });
      }
      res.status(200).json({ message: "User registered successfully!" });
    });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ HASH FUNCTION
function computeHash(source, destination, time) {
  const formattedTime = time.trim().padStart(5, "0"); // Ensure "HH:mm" format
  const data = `${source.trim().toLowerCase()}-${destination.trim().toLowerCase()}-${formattedTime}`;
  console.log("🔹 Data for Hashing:", data);
  return crypto.createHash("sha256").update(data, "utf-8").digest("hex");
}

// Get All Buses API
app.get("/get-all-buses", (req, res) => {
  db.query("SELECT * FROM buses", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
});

// Search Bus API (only one version now)
app.post("/search-bus", (req, res) => {
  const { source, destination, time } = req.body;
  const query = `
      SELECT route_number, source, destination, bus_type, TIME_FORMAT(time, '%H:%i') AS formatted_time
      FROM bus_routes
      WHERE source = ? AND destination = ? AND time = ?;
  `;

  db.query(query, [source, destination, time], (err, results) => {
    if (err) {
      console.error("Database error:", err);
      res.status(500).json({ error: "Database error" });
    } else {
      console.log("🚀 Fetched Data from MySQL:", results);
      res.json(results);
    }
  });
});

// Start Server
const PORT = process.env.DB_PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on PORT ${PORT}`);
  console.log(`🌐 CORS enabled for Vercel frontend: mybus-frontend.vercel.app`);
});
