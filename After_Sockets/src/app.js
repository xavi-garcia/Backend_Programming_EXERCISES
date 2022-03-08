const express = require('express');
const {Server} = require('socket.io');
const ProductManager = require('./Manager/ProductsManager')

//Services
const productsService = new ProductManager()
const app = express();
const PORT = process.env.PORT||8080;
const server = app.listen(PORT,()=>console.log(`Listening on PORT${PORT}`))
const io = new Server(server);

app.use(express.static(__dirname+'/public'))

io.on('connection', async socket=>{
    console.log('client is online');
    socket.on('sendProduct', async data=>{
       await productsService.add(data);
       console.log(data)
       let products = await productsService.getAll();
       io.emit('productsLog', products)
    })
})

let log = [];

io.on('connection',(socket)=>{
    socket.broadcast.emit('newUser')
    socket.emit('log', log);

    socket.on('message', data=>{
        log.push(data);
        io.emit('log',log)
    })

    socket.on('registered', data=>{
        socket.emit('log',log);
    })
})