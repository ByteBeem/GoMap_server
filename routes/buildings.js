const express = require('express');
const router = express.Router();
const buildings = require('../data/buildings.json');

// API route to get all lecture halls
router.get('/', (req, res) => {
  console.log("Received request for lecture halls");
  res.send(buildings);
});

module.exports = router;
