"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _appointment = _interopRequireDefault(require("./appointment.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // /api/item

router.route('/').get(_appointment.default.getOne).post(_appointment.default.createOne); // /api/item/:id

router.route('/:id').get(_appointment.default.getOne).put(_appointment.default.updateOne).delete(_appointment.default.removeOne);
var _default = router;
exports.default = _default;