const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(express.static('public'))

app.set('views', './src/views')
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}))

const weatherRouter = require('./src/routes/weather')

app.use('/',weatherRouter)

app.listen(port,()=>{
    console.log(`Listning on port ${port}`)
})