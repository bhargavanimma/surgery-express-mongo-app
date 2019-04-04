"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Test = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const testSchema = new _mongoose.default.Schema({
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
testSchema.index({
  list: 1,
  name: 1
}, {
  unique: true
});

const Test = _mongoose.default.model('test', testSchema);

exports.Test = Test;