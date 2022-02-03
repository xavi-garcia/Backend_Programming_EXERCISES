const express = require('express')
const app = express()
const products = require('./Desafio2/files/productos.json')


const connectedServer = app.listen(8080,()=>{
    console.log('Listening on port 8080');
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/Desafio2/files/productos.json')
})

app.get('/productoRandom', function (req, res) {
    const products = require('./Desafio2/files/productos.json')  
    res.send(products[Math.floor(Math.random()* products.length)])
})