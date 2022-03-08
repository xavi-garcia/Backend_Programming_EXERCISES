const express = require('express');
const handlebars = require('express-handlebars')
const app = express();

const server = app.listen(8080,()=>console.log('listening on port 8080'));

app.engine('handlebars', handlebars.engine());
app.set('views','./views');
app.set('view engine','handlebars')

let listaUsuarios = () => [{first_name:"Javier", last_name:"Garcia"},{first_name:"Tanjiro", last_name:"Uta"}]

app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/users',(req,res)=>{
    let users = listaUsuarios;
    res.render('users',{
        users:users
    })
})