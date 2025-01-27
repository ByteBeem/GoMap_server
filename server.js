const express = require('express');
const cors = require('cors');
const path = require('path');
const lectureHallsRoute = require('./routes/lectureHalls');
const buildingsRoute = require('./routes/buildings');
// Initialize the app
const app = express();
const port = 3000;

// Use CORS for cross-origin requests
app.use(cors());

// Serve static files from the "assets" directory
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Use the lecture halls route
app.use('/lectureHalls', lectureHallsRoute);
app.use('/buildings', buildingsRoute);

// Root route to check server status
app.get('/', (req, res) => {
  res.send('Lecture Hall API is running!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
