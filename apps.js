const express = require('express');
const app = express();

app.get('/', (req, res) => {

    let salida = {
        nombre: 'Fernando',
        edad: 32,
        url: req.url
    }

    res.send(salida);
})

.listen(3000, () => {
    console.log('Escuchando al puerto 3000');
})