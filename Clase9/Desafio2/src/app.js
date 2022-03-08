const express = require('express')
const app = express()
const fs = require('fs')
const server = app.listen(8080,()=>console.log('listening on port 8080'))

app.engine('cte',(filePath, ObjectToReplace,callback)=>{
    fs.readFile(filePath,(err, content)=>{
        if(err) return callback(new Error(err))
        const template = content.toString()
        .replace("^^titulo$$",""+ObjectToReplace.titulo)
        .replace("^^autor$$",""+ObjectToReplace.autor)
        return callback(null, template)
    })
})

app.set('views','./views')
app.set('view engine','cte')

app.get('/',(req,res)=>{
    res.render('Bienvenida',{
        titulo:"The Lord of the Rings",
        autor:"J. R. R. Tolkien"
    })
})