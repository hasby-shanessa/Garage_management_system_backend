const mongoose = require('mongoose');

const WorkshopCardSchema = new mongoose.Schema({
  plateNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['created', 'repaired', 'tested', 'closed'],
    default: 'created',
  },
  driver: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  entryDate: {
    type: Date,
    required: true,
  },
  repairedAt: Date,
  testedAt: Date,
  closedAt: Date,
  mechanicalIssue: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('WorkshopCard', WorkshopCardSchema);