const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')


const authenticationMiddleware = async (req,res,next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided', 401)
    };

    const token = authHeader.split(' ')[1]    

    try {
        //i verify that the token is valid
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        //decoded is a variable that contains the info user given in the payload 

        const {id,username} = decoded
        req.user = {id,username}
        next()
    
    } catch (error) {
        throw new CustomAPIError('Not authorized to access this route',401)
    }
}

module.exports = authenticationMiddleware
