const express = require('express');
const router = express.Router();

// Use an environment variable for the base URL or fallback to a default value
const baseUrl = process.env.BASE_URL || 'https://gomap-czb9f0h8b2anfng6.southafricanorth-01.azurewebsites.net';

// Sample data for the lecture halls with descriptions
const lectureHalls = [
  { 
    id: 1,
    name: "TA",
    distance: "100m",
    image: `${baseUrl}/assets/images/classroom.png`,
    description: "TA is equipped with modern seating arrangements and a projector for presentations."
  },
  { 
    id: 2,
    name: "TC",
    distance: "250m",
    image: `${baseUrl}/assets/images/classroom.png`,
    description: "TC offers comfortable chairs and a large whiteboard for discussions and lectures."
  },
  { 
    id: 3,
    name: "KB",
    distance: "400m",
    image: `${baseUrl}/assets/images/classroom.png`,
    description: "KB is a spacious hall with tiered seating and advanced sound systems."
  },
];

// API route to get all lecture halls
router.get('/', (req, res) => {
  try {
    console.log("Received request for lecture halls");
    res.status(200).json(lectureHalls);
  } catch (error) {
    console.error("Error fetching lecture halls:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
