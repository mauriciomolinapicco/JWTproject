//i get the username and password and if they both ar good i generate a JWT
//send back to frontend
//only someone with a jwt can access the dashboard

require('dotenv').config()
const jwt = require('jsonwebtoken')
const CustomAPIError = require('../errors/custom-error')

const login = async (req,res) => {
    const {username,password} = req.body;

    if(!username || !password){
        throw new CustomAPIError('Please provide email and password',400)
    }

    //just for demo, normally is porovided by db
    const id = new Date().getDate()

    //en jwt.sign(payload)  ->el payload se refiere a informacion del usuario (generalmente el id) 
    const token = jwt.sign({id, username},process.env.JWT_SECRET,{expiresIn:'30d'})
    console.log(username,password)

    res.status(200).json({msg:'user created', token})
}


const dashboard = async (req,res) => {
    console.log(req.user)

    const luckyNumber = Math.floor(Math.random()*100)

    res.status(200).json({
        msg: `Hello ${req.user.username}`,
        secret: `your secret lucky number is ${luckyNumber}`
    })
}

module.exports = {
    login,
    dashboard
}