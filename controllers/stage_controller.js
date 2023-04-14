// DEPENDENCIES
const stages = require('express').Router();
const db = require('../models');
const { Stage, Event, StageEvent } = db;
const { Op } = require('sequelize');

// INDEX (GET findAll)
stages.get('/', async (req, res) => {
  try {
    // this finds all stages
    const foundStages = await Stage.findAll({
      order: [['stage_id', 'ASC']],
      where: {
        name: {
          [Op.like]: `%${req.query.name ? req.query.name : ''}%`,
        },
      },
      limit: 10,
    });
    res.status(200).json(foundStages);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// SHOW (GET findOne)
stages.get('/:name', async (req, res) => {
  try {
    const foundStage = await Stage.findOne({
      where: { name: req.params.name },
      include: {
        model: Event,
        as: 'events',
        through: { attributes: [] },
      },
    });
    res.status(200).json(foundStage);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// CREATE (POST)
stages.post('/', async (req, res) => {
  try {
    // this creates a new stage
    const newStage = await Stage.create(req.body);
    res.status(201).json({
      message: 'Stage created',
      data: newStage,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// UPDATE (PUT)
stages.put('/:id', async (req, res) => {
  try {
    // this updates a stage
    const updatedStage = await Stage.update(req.body, {
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(202).json({
      message: `Successfully updated ${updatedStage} stage(s)`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// DELETE (DELETE)
stages.delete('/:id', async (req, res) => {
  try {
    // this deletes a stage
    const deletedStage = await Stage.destroy({
      where: {
        stage_id: req.params.id,
      },
    });
    res.status(200).json({
      message: `${deletedStage} stage(s) deleted`,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Sever Error',
    });
  }
});

// EXPORT
module.exports = stages;
