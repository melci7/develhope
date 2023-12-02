const Joi = require('joi');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

const planetController = {

  uploadImage: async (req, res) => {
    const db = req.app.locals.db;
    const planetId = parseInt(req.params.id);
    const planet = await db.oneOrNone('SELECT * FROM planets WHERE id=$1', planetId);

    if (!planet) {
      return res.status(404).json({ error: 'Planet not found' });
    }

    if (planet.image) {
      const imagePath = path.join(__dirname, '..', 'uploads', path.basename(planet.image));
      fs.unlinkSync(imagePath);
    }

    const imagePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    await db.none('UPDATE planets SET image=$2 WHERE id=$1', [planetId, imagePath]);

    res.json({ msg: 'Image uploaded successfully' });
  },
};

module.exports = planetController;
