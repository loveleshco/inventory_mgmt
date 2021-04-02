const express = require('express')
const app = express()
const ejs = require('ejs');

app.listen(3000)

app.set('view engine','ejs')

app.use(express.static('public'))

app.get('/', (req,res) => {

    res.render('index')
})

app.get('/about', (req,res) => {

    res.render('about')
})

app.get('/login', (req,res) => {

    res.render('login')
})

app.get('/storage', (req,res) => {

    res.render('storage_unit')
})