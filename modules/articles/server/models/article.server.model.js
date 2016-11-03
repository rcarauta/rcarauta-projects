'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  telefone: {
    type: String,
    default: '',
    trim: true,
    required: 'O telefone não pode ser vazio'
  },
  cidade: {
    type: String,
    default: '',
    trim: true,
    required: 'O cidade não pode ser vazia'
  },
  estado: {
    type: String,
    default: '',
    trim: true,
    required: 'O estado não pode ser vazio'
  },
  cep: {
    type: String,
    default: '',
    trim: true
  },
  localizacao: {
    type: String,
    default: '',
    trim: true
  },
  lat: {
    type: Number,
    efault: 0,
    rim: true
  },
  lon: {
    type: Number,
    default: 0,
    trim: true
  },
  descricao: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Article', ArticleSchema);
