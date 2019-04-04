"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _doctor = require("./doctor.controllers");

const router = (0, _express.Router)();
router.get('/', _doctor.me);
router.put('/', _doctor.updateMe);
var _default = router;
exports.default = _default;