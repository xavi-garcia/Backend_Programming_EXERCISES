const express= require('express');
const app = express();

const PORT = 8080;
const server = app.listen(8080,()=>console.log(`Listening on ${PORT}`));



app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}))

let products = [];
app.get('/',(req,res)=>{
    res.render('home',{
        products
    })
})

app.post('/products',(req,res)=>{
    products.push(req.body);
    res.redirect('/')
})
