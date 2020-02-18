const express = require('express');
const app = express();
const hbs = require('hbs');

//Se usa una variable de entorno para almacenar el valor del puerto, o se asigna 3000 en caso de que la 
//variable de entorno no exista (en caso de ser ejecutado localmente)

const port = process.env.PORT || 3000;

require('./helper/helper');

//Middleware

app.use(express.static(__dirname + '/public'));

// Express HBS engine

app.set('view engine', 'hbs');

// Registro de parciales de código html - código que es repetitivo en varias páginas
hbs.registerPartials(__dirname + '/views/parciales');

//Helper - son funciones que se disparan cuando el template lo requiere. Por ejemplo, acá se puede
//colocar el código para obtener el año, nombrándolo en una función llamada getAnio


//Petición get que renderiza a la página home.hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'WaLeska',
        //  anio: new Date().getFullYear()
    });

});
app.get('/about', (req, res) => {
    res.render('about', {
        //  anio: new Date().getFullYear()
    });

});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})