// src/api/cars/model.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const fields = {
  brandCar: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 40,
  },
  modelCar: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 60,
  },
  color: {
    type: String,
    required: true,
    trim: true,
    maxlenght: 20,
  },
  description: {
    type: String,
    default: '',
    trim: true,
    maxlenght: 255,
  },
  /*
  dueDate: {
    type: Date,
    default: null,
  },
  */
};

const carsSchema = new Schema(fields, {
  timestamps: true,
});

module.exports = mongoose.model('cars', carsSchema);
