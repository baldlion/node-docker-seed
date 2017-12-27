import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    message: 'node-docker-seed'
  })
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    error: err
  })
})

export default app
