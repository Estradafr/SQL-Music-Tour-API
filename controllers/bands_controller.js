// DEPENDENCIES
const bands = require('express').Router();
const db = require('../models');
const { Band } = db;

// GET (INDEX/FINDALL)
bands.get('/', async (req, res) => {
  try {
    const foundBands = await Band.findAll();
    res.status(200).json(foundBands);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// SHOW (ID/FINDONE)
bands.get('/:id', async (req, res) => {
  try {
    // this finds a band by it's id where the id is equal to the req.params.id parameter
    const foundBand = await Band.findOne({
      where: {
        band_id: req.params.id,
      },
    });
    res.status(200).json(foundBand);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// EXPORT
module.exports = bands;
