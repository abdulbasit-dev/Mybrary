const express = require('express')
const {urlencoded} = require('express')

//express app
const app = express()

// register view engin
app.set('view engin', 'ejs')

//connect to mongoBb
const DB_URL = ''

//midleware
app.use(express.static('public'))
app.use(urlencoded({extended: true}))

//listen for requets
app.listen(3000)

app.get('/', (req, resp) => {
  resp.send('shdgh')
})
