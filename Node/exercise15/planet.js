const express = require('express');
const router = express.Router();
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

const validatePlanet = (req, res, next) => {
  const { error } = planetSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

router.get('/api/planets', (req, res) => {
  res.json(planets);
});

router.get('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);
  if (planet) {
    res.json(planet);
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
});

router.post('/api/planets', validatePlanet, (req, res) => {
  const newPlanet = req.body;
  planets.push(newPlanet);
  res.status(201).json({ msg: 'Planet created successfully' });
});

router.put('/api/planets/:id', validatePlanet, (req, res) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);

  if (planetIndex !== -1) {
    planets[planetIndex] = req.body;
    res.json({ msg: 'Planet updated successfully' });
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
});

router.delete('/api/planets/:id', (req, res) => {
  const planetId = parseInt(req.params.id);
  const planetIndex = planets.findIndex((p) => p.id === planetId);

  if (planetIndex !== -1) {
    planets.splice(planetIndex, 1);
    res.json({ msg: 'Planet deleted successfully' });
  } else {
    res.status(404).json({ error: 'Planet not found' });
  }
});

module.exports = router;
