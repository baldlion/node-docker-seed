import app from '@/app'
import http from 'http'
import chalk from 'chalk'

const server = http.createServer(app)
const port = process.env.PORT || 4040

server.listen(port)

server.on('error', onError)
server.on('listening', onListening)

/**
 * Event listener for HTTP server "error" event.
 */
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.log(chalk.white.bgRed(`\nError: Port ${port} requires elevated privileges\n`))
      process.exit(1)
    case 'EADDRINUSE':
      console.log(chalk.white.bgRed(`\nError: Port ${port} is already in use\n`))
      process.exit(1)
    default:
      console.log(chalk.white.bgRed(`\nError: ${error}\n`))
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening () {
  console.log(chalk.bold.whiteBright.bgBlue(`\nServer listening on port ${port}\n`))
}
