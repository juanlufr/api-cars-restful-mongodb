// src/api/index.js

const router = require('express').Router();

const cars = require('./cars/routes');

router.use('/cars', cars);

module.exports = router;
