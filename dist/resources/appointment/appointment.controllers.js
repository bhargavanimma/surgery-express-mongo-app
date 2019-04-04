"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _appointment = require("./appointment.model");

var _default = (0, _crud.crudControllers)(_appointment.Appointment);

exports.default = _default;