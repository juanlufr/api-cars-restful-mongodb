// src/api/cars/model.js

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

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
};

const carsSchema = new Schema(fields, {
  timestamps: true,
});

carsSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('cars', carsSchema);
