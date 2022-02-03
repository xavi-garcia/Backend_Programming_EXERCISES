const http = require('http');

const server = http.createServer((request, response)=>{
    let currentTime = new Date().getHours();
    if (currentTime>=6&&currentTime<=12) response.end('¡Buenos días!');
    else if (currentTime>=13&&currentTime<=19) response.end('¡Buenas tardes!');
    else response.end('¡Buenas noches!');
    console.log(currentTime);

})
const connectedServer = server.listen(8080,()=>{
    console.log('Server is listening on port 8080')
})