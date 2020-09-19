const express = require('express')
const requireAuth = require('../middlewares/requiredAuth')
const Tracks = require('../models/Tracks')
const router = express.Router()

router.use(requireAuth)

router.get('/tracks', async(req,res) => {

    const tracks = await Tracks.find({ userId: req.user._id})

    res.status(200).send(tracks)

})

router.post('/tracks', async(req,res) => {
    const { name, locations } = req.body

    if(!name || !locations){
        return res.status(422).send({ error: "You must provide name and locations"})
    }

    try {
        const track = new Tracks({ name, locations, userId: req.user._id })

        await track.save()
        res.status(200).send( track )

    } catch (error) {
        res.status(422).send({ error: "Something went wrong"})
    }
})


module.exports = router