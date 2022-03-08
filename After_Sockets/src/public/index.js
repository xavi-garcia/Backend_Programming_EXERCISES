const socket = io();
let form = document.getElementById('productForm');

form.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    let data = new FormData(form);
    let sendObj = {};
    data.forEach((val,key)=>sendObj[key]=val);
    socket.emit('sendProduct', sendObj);
    form.reset()
})

socket.on('productsLog', data=>{
    let products = data.payload;
    let productsTemplate = document.getElementById('productsTemplate');
    fetch('templates/newestProducts.handlebars').then(response=>{
        return response.text();
    }).then(template=>{
        const processedTemplate = Handlebars.compile(template);
        const html = processedTemplate({products})
        productsTemplate.innerHTML = html;
    })
})


let user;
let chatBox = document.getElementById('chatBox');
let button = document.getElementById('button')
Swal.fire({
    title:"User's name",
    input:"text",
    text:"What's your user name?",
    inputValidator: (value)=>{
        return !value && "You need to write a name!"
    },
    allowOutsideClick:false
}).then(result=>{
    user=result.value;
    socket.emit('registered',user);
})

button.addEventListener('click',(evt)=>{
    if('click'){
       if(chatBox.value.trim().length>0){
        socket.emit('message',{user:user, message:chatBox.value.trim()})
        chatBox.value="";
       }
    }
})


//SOCKETS
socket.on('newUser',(data)=>{
    Swal.fire({
        icon:"success",
        text:"new user online"

    }) 
})

socket.on('log', data =>{
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(message=>{
        let today = new Date()
        messages =  messages + `${today.toDateString() + ' - ' + message.user} says: ${message.message}</br>`;
    })
    log.innerHTML = messages;
})