"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _test = _interopRequireDefault(require("./test.controllers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = (0, _express.Router)(); // /api/item

router.route('/').get(_test.default.getOne).post(_test.default.createOne); // /api/item/:id

router.route('/:id').get(_test.default.getOne).put(_test.default.updateOne).delete(_test.default.removeOne);
var _default = router;
exports.default = _default;