const jwt = require('jsonwebtoken')
const User = require('../models/User')

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    
    if(!authorization){
        res.status(401).send({ error: 'You must logged in for that...'})
    }
    
    //authorization === 'Bearer sadskhdksdjkashjdkasnda...'
    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, 'MY_TOKEN_SECRET', async(err, payload) => {
        if(err){
            return res.status(401).send({
                error: 'You must logged in for that...'
            })
        }

        const { userId} = payload

        const user = await User.findById(userId);
        req.user = user
        next()
    })

}