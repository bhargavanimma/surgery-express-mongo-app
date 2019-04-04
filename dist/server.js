"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = require("body-parser");

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _cors = _interopRequireDefault(require("cors"));

var _auth = require("./utils/auth");

var _db = require("./utils/db");

var _patient = require("./resources/patient/patient.router");

var _doctor = require("./resources/doctor/doctor.router");

var _appointment = require("./resources/appointment/appointment.router");

var _test = require("./resources/test/test.router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = require('path');

const app = (0, _express.default)();
exports.app = app;
app.disable('x-powered-by');
app.use((0, _cors.default)());
app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({
  extended: true
}));
app.use((0, _morgan.default)('dev')); // viewed at http://localhost:8080

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
}); // viewed at http://localhost:8080

app.get('/panel', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/doctor.html'));
}); // viewed at http://localhost:8080

app.get('/patients', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/patients.html'));
}); // viewed at http://localhost:8080

app.get('/tests', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/tests.html'));
});
app.post('/signup', _auth.signup);
app.post('/signin', _auth.signin);
app.use('/api', _auth.protect);

const start = async () => {
  try {
    await (0, _db.connect)();
    app.listen(_config.default.port, () => {
      console.log(`REST API on http://localhost:${_config.default.port}/api`);
    });
  } catch (e) {
    console.error(e);
  }
};

exports.start = start;