const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/User')



router.post('/signup', async (req,res) => {
    const { email, password } = req.body
   
    try {

        const user = new User({ email, password})
        await user.save()

        const token = jwt.sign({ userId: user._id }, 'MY_TOKEN_SECRET')
        res.status(200).send({ token, message: 'Hello token' })

    } catch (error) {
        return res.status(422).send({ error: error.message , message: 'Please enter the email password again'})
    }
    
})

router.post('/signin', async (req,res) => {
    const { email, password } = req.body

    if(!email || !password){
        return res.status(422).send({ error : "Must provide email and password"})
    }

    const user = await User.findOne({ email })
    if(!user){
        return res.status(422).send({ error: "Invalid Email or paswword"})
    }

    try {

        await user.comparePassword(password)
        const token = jwt.sign({ userId: user._id }, 'MY_TOKEN_SECRET')
        res.status(200).send({ token, message: 'signin' })
        
    } catch (error) {
        return res.status(422).send({ error: "Invalid Email or paswword"})
    }


})

module.exports = router; 