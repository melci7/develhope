
const Joi = require('joi');

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const planetSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
});

const planetsController = {
  getAll: (req, res) => {
    res.json(planets);
  },

  getOneById: (req, res) => {
    const planetId = parseInt(req.params.id);
    const planet = planets.find((p) => p.id === planetId);
    if (planet) {
      res.json(planet);
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  },

  create: (req, res) => {
    const newPlanet = req.body;
    const { error } = planetSchema.validate(newPlanet);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    planets.push(newPlanet);
    res.status(201).json({ msg: 'Planet created successfully' });
  },

  updateById: (req, res) => {
    const planetId = parseInt(req.params.id);
    const updatedPlanet = req.body;
    const { error } = planetSchema.validate(updatedPlanet);

    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const planetIndex = planets.findIndex((p) => p.id === planetId);
    if (planetIndex !== -1) {
      planets[planetIndex] = updatedPlanet;
      res.json({ msg: 'Planet updated successfully' });
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  },

  deleteById: (req, res) => {
    const planetId = parseInt(req.params.id);
    const planetIndex = planets.findIndex((p) => p.id === planetId);

    if (planetIndex !== -1) {
      planets.splice(planetIndex, 1);
      res.json({ msg: 'Planet deleted successfully' });
    } else {
      res.status(404).json({ error: 'Planet not found' });
    }
  },
};

module.exports = planetsController;
