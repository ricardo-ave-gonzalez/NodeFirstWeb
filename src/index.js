const express = require('express');
const app = express();
const path = require('path');//modulo que esta preparado para trabajar
                             // con directorios barra y contrabarra                               


//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'))//configuro donde se encuentra guardada la plantilla
app.engine('html', require('ejs').renderFile);// utilizamos html y seguimos con la funcionalidad de ejs
app.set('view engine', 'ejs')//motor de plantilla donde le decimos cual va a usar

//widdlewares

//routes
app.use(require('./routes/index.js'));


//static files
app.use(express.static(path.join(__dirname, 'public')))

//listening the server
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
})