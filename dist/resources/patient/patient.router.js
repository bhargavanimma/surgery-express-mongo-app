"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _patient = require("./patient.controllers");

const router = (0, _express.Router)();
router.get('/', _patient.me);
router.put('/', _patient.updateMe);
var _default = router;
exports.default = _default;