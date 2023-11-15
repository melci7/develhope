const crypto = require('crypto');

const getRandomID = crypto.randomBytes(16).toString('hex');
console.log(getRandomID);