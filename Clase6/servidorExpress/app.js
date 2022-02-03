const express = require('express');

const moment = require('moment')

const app = express();


const connectedServer = app.listen(8080,()=>{
    console.log('Listening on port 8080');
})

let counter=0;

app.get('/',(req, res)=>{
    res.send('<h1 style="color:blue;"> Bienvenidos al servidor espress <h1>')
})

app.get('/visitas',(req, res)=>{
    counter++;
    res.send(`Visitaste este endpoint ${counter} veces`)
})

app.get('/fyh', (req, res)=>{
    let dateTime = moment();
    res.send({
        fhy: dateTime.format('DD/MM/YYYY hh:mm:ss')
    })
})