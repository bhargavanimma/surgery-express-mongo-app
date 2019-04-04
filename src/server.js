import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import config from './config'
import cors from 'cors'
import { signup, signin, protect } from './utils/auth'
import { connect } from './utils/db'
import { patinetRouter } from './resources/patient/patient.router'
import { doctorRouter } from './resources/doctor/doctor.router'
import { appointmentRouter } from './resources/appointment/appointment.router'
import { testRouter } from './resources/test/test.router'
var path = require('path');

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// viewed at http://localhost:8080
app.get('/panel', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/doctor.html'));
})

// viewed at http://localhost:8080
app.get('/patients', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/patients.html'));
})

// viewed at http://localhost:8080
app.get('/tests', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/tests.html'));
})

app.post('/signup', signup)
app.post('/signin', signin)

app.use('/api', protect)

export const start = async () => {
  try {
    await connect()
    app.listen(config.port, () => {
      console.log(`REST API on http://localhost:${config.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
