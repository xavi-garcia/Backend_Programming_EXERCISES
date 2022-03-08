const socket = io()
let user;
let chatBox = document.getElementById('chatBox')
Swal.fire({
    title:"Identificador",
    input:"text",
    text:"Ingrese el nombre del usuario que utilizará en el chat",
    inputValidator: (value)=>{
        return !value && "¡Necesitas identificarte!"
    },
    allowOutsideClick:false
}).then(result=>{
    user=result.value;
    socket.emit('registered',user);
})

chatBox.addEventListener('keyup',(evt)=>{
    if(evt.key==="Enter"){
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
        text:"usuario nuevo conectado"

    }) 
})

socket.on('log', data =>{
    let log = document.getElementById('log');
    let messages = "";
    data.forEach(message=>{
        messages = messages+ `${message.user} dice: ${message.message}</br>`;
    })
    log.innerHTML = messages;
})