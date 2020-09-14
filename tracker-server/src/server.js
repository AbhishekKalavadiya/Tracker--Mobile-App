const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const trackRoutes = require('./routes/trackRoutes')
const requireAuth = require('./middlewares/requiredAuth')
const PORT = process.env.PORT || 3001

const app = express()

mongoose.connect('mongodb+srv://user:tracker01@cluster0.6c6x4.mongodb.net/Cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
},(err)=>{
    if(err) throw err;
    console.log("DB Connected Successfully");
})

app.use(helmet())
app.use(morgan('common'))
app.use(bodyParser.json())

app.use(authRoutes)
app.use(trackRoutes)

app.get('/', requireAuth, (req,res) => {
    res.send(`You are valid user with email Id: ${req.user.email}`)
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`)
})
