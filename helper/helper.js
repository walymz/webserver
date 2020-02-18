const hbs = require('hbs');

//Helper que regresa el año actual
hbs.registerHelper('getAnio', () => new Date().getFullYear());

//Helper que regresa una palabra capitalizada (con iniciales en mayúscula)
hbs.registerHelper('capitalizado', (texto) => {
    palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
})