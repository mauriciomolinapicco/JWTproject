//libreria de npm que contiene todos los http codes
const {StatusCodes} = require('http-status-codes')

const CustomAPIError = require('./custom-error')

class Unauthenticated extends CustomAPIError {
    constructor(message) {
      super(message)
      this.statusCode = StatusCodes.UNAUTHORIZED
    }
  }
  
  module.exports = Unauthenticated