// src/api/cars/routes.js

const router = require('express').Router();
const controller = require('./controller');

/*
 * /api/cars/ POST - CREATE
 * /api/cars/ GET - READ ALL
 * /api/cars/:id GET - READ ONE
 * /api/cars/:id PUT - UPDATE
 * /api/cars/:id DELETE - DELETE
 */

router.route('/')
  .post(controller.create)
  .get(controller.all);

router.param('id', controller.id);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
