const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

const mongoose = require('mongoose')

//express app
const app = express()

// register view engin
app.set('view engine', 'ejs')
app.set('layout', 'layouts/layout')
// app.set('views', __dirname + '/views')

//connect to mongoBb
const DB_URL =
  'mongodb+srv://abdulbasit:42591800@cluster0.bghf6.mongodb.net/mybrary?retryWrites=true&w=majority'
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
  console.log('connected')
})

//midleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: false, limit: '10mb'}))
app.use(expressLayouts)

//listen for requets
app.listen(process.env.PORT || 3000)

//routers
app.use('/', indexRouter)
app.use('/authors', authorRouter)
