const express= require('express');

const app = express();

const PORT = 8080;
const server = app.listen(8080,()=>console.log(`Listening on ${PORT}`));

app.set('views','./views/partials');
app.set('view engine','ejs');

let consultaFalsa = () =>[
    {first_name:"Javier", last_name:"Garcia"},
    {first_name:"Sofía", last_name:"Garcia"},
    {first_name:"Ximena", last_name:"Garcia"}
]

app.get('/',(req,res)=>{
    res.render('hello',{
        message:"hola!"
    })
})

app.get('/users',(req,res)=>{
    let users = consultaFalsa();
    res.render('users',{
        users
    })
})