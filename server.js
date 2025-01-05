const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname)));
const Hospital = require("./models/hospital");
const User = require("./models/user");

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "dashboard.html"));
});
// Serve the signup page
app.get("/signup.html", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

// Handle form submission
app.post("/submit", (req, res) => {
  console.log("Form Data Received:", req.body);
  const { name, username, password } = req.body;
  const users = new User({ name, username, password });
  const result = User.insertMany(users);
  console.log("Users inserted", users);
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server

mongoose.connect("mongodb://localhost:27017/customers").then(() => {
  console.log("Connected!");

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});

// Handle login
// Handle login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  console.log(username + " " + password);
  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }

    // Log both the entered and stored passwords for debugging
    console.log(`Entered password: ${password}`);
    console.log(`Stored password: ${user.password}`);

    // Compare the entered password with the stored password (plain text)
    if (password !== user.password) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid username or password" });
    }

    // If username and password match, return a success response
    res.sendFile(path.join(__dirname, "dashboard.html"));
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

// const hospital = mongoose.model("Hospital", hospitalSchema);
app.get("/api/hospitals", async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.json(hospitals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
