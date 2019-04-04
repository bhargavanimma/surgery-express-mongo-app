"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Appointment = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const appointmentSchema = new _mongoose.default.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 50
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'complete', 'pastdue'],
    default: 'active'
  },
  notes: String,
  due: Date,
  createdBy: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: 'user',
    required: true
  },
  list: {
    type: _mongoose.default.SchemaTypes.ObjectId,
    ref: 'list',
    required: true
  }
}, {
  timestamps: true
});
appointmentSchema.index({
  list: 1,
  name: 1
}, {
  unique: true
});

const Appointment = _mongoose.default.model('appointment', appointmentSchema);

exports.Appointment = Appointment;