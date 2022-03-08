const template = Handlebars.compile(`<ul>
<li>{{nombre}}</li>
<li>{{apellido}}</li>
<li>{{edad}}</li>
<li>{{email}}</li>
<li>{{teléfono}}</li>
</ul>`)

const html = template ({
    nombre:"Javier",
    apellido:"Garcia",
    edad:31,
    email:"trad.ljgarcia@gmail.com",
    teléfono:"3512707448"
})

document.getElementById("datos").innerHTML = html