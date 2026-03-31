const express = require('express');
const router = express.Router();
const Team = require('../models/team');

router.get('/', async (req, res) => {
  console.log("GET /teams endpoint hit");

  try {
    const teams = await Team.find({});
    console.log("Teams found:", teams);
    res.status(200).json({ message: 'Ok', teams });
  } catch (err) {
    console.error('Error en GET /teams:', err);
    res.status(500).json({ message: 'Database error' });
  }
});

module.exports = router;
