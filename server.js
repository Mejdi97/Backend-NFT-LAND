require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true , useUnifiedTopology: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())



//routes
const customersRouter = require('./routes/customers')
app.use('/customers', customersRouter)

const assetsRoutes=require('./routes/assets')
app.use('/assets',assetsRoutes)

const orderRoutes=require('./routes/order')
app.use('/order',orderRoutes)

const favoriteRoutes=require('./routes/favorites')
app.use('/favorite',favoriteRoutes)

const likeRoutes=require('./routes/likes')
app.use('/like',likeRoutes)

const bidsRoutes=require('./routes/bids')
app.use('/bids',bidsRoutes)




app.listen(3001, () => console.log('Server Started'))