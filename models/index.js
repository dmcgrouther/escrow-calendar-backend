const express = require('express')
const mongoose = require('mongoose');

const dburl = 'mongodb://localhost/:27017/escrow-calendar';

mongoose.connect(dburl, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  House: require('./House'),
  User: require('./User'),
};