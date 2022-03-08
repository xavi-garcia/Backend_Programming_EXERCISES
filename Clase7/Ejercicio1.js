const express = require('express');
const app = express();
const server = app.listen(8080,()=>console.log('Listening on port 8080'));

const sentence = "Hola";

app.get('/api/sentence', (req, res)=>{
    res.send({sentence:sentence})
})

app.get('/api/letters/:num',(req, res)=>{
    let param =  req.params.num;
    if(isNaN(param)) return res.status(400).send({error:'not a number'});
    let number = parseInt(param);
    if(number<1||number>sentence.length) return res.status(400).send({error:'out of boundaries'})
    res.send({letter:sentence.charAt(number-1)})
    console.log(number);
    res.send({Hola:"Hola"})
})

app.get('/api/words/:num',(req, res)=>{
    let param =  req.params.num;
    if(isNaN(param)) return res.status(400).send({error:'not a number'});
    let number = parseInt(param);
    let array = sentence.split(' ');
    if(number<1||number>array.length) return res.status(400).send({error:'out of boundaries'})
    res.send({word:array[number -1]})

})

app.post('/hola',(req, res)=>{
    res.send('hola')
})