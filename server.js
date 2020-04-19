const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const product = require('./routes/product')
const order = require('./routes/order')
const path = require('path')
const app = express()

//connect to database
mongoose.connect(`mongodb://${process.env.USER}:${process.env.PASS}@ds211875.mlab.com:11875/commerce`,{useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology:true})
    .then(() => {
        console.log('connected to db')
    })
    .catch(err => {
        console.log(err)
    })

//middleware for cors and json and terminal messages
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//static build folder
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
  
//static image folder
app.use('/uploads',express.static('./uploads'))

//api endpoints
app.use('/api/products', product)
app.use('/api/orders', order)

// Error handlers - for not found, and app errors 
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')
})

// Start server running 
var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})
