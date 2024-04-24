//badRequest y unauth heredan de CustomError que a su vez hereda de Error (nativa)
//estos dos le especifican el codigo

const BadRequest = require('./bad-request')
const CustomAPIError = require('./custom-error')
const Unauthenticated = require('./unautheticated')

module.exports = {
    CustomAPIError,
    BadRequest,
    Unauthenticated
}