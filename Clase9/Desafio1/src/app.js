const express = require('express')
const app = express()
const server = app.listen(8080,()=>console.log('Listening on Port 8080'))

app.use(express.static(__dirname+'/public'))