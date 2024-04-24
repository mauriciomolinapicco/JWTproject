//libreria de npm que contiene todos los http codes
const {StatusCodes} = require('http-status-codes')

const CustomAPIError = require('./custom-error')

class BadRequest extends CustomAPIError {
    constructor(message) {
      super(message)
      //Icould do this.statusCode = 400 but its more readable like this:
      this.statusCode = StatusCodes.BAD_REQUEST
    }
  }
  
  module.exports = BadRequest
  