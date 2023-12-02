const Joi = require('joi');

const planetsController = {
  getAll: async (req, res) => {
    const db = req.app.locals.db;
    const planets = await db.any('SELECT * FROM planets');
    res.json(planets);
  },

  getOneById: async (req, res) => {
    const db = req.app.locals.db;
    const planetId = parseInt(req.params.id);
    const planet = await db.oneOrNone('SELECT * FROM planets WHERE id=$1', planetId);

    if (planet) {
      res.json(planet);
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  },

  create: async (req, res) => {
    const db = req.app.locals.db;
    const newPlanet = req.body;
    const { error } = Joi.object({ name: Joi.string().required() }).validate(newPlanet);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    await db.none('INSERT INTO planets (name) VALUES ($1)', newPlanet.name);
    res.status(201).json({ msg: 'Planet created successfully' });
  },

  updateById: async (req, res) => {
    const db = req.app.locals.db;
    const planetId = parseInt(req.params.id);
    const updatedPlanet = req.body;
    const { error } = Joi.object({ name: Joi.string().required() }).validate(updatedPlanet);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const result = await db.result('UPDATE planets SET name=$1 WHERE id=$2', [updatedPlanet.name, planetId]);

    if (result.rowCount === 1) {
      res.json({ msg: 'Planet updated successfully' });
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  },

  deleteById: async (req, res) => {
    const db = req.app.locals.db;
    const planetId = parseInt(req.params.id);
    const result = await db.result('DELETE FROM planets WHERE id=$1', planetId);

    if (result.rowCount === 1) {
      res.json({ msg: 'Planet deleted successfully' });
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  },
};

module.exports = planetsController;
