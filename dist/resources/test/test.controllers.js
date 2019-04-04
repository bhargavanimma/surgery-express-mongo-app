"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _crud = require("../../utils/crud");

var _test = require("./test.model");

var _default = (0, _crud.crudControllers)(_test.Test);

exports.default = _default;