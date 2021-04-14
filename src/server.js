const express = require('express');
const app = express();
// puxando o arquivo com as rotas 
const routes = require('./routes');
// requirindo o arquivo nativo do node
const path = require('path');

// para no motor de vizualização utilize o ejs
app.set('view engine', 'ejs');

// mudando o caminho padrão da pasta views
app.set('views', path.join(__dirname, 'views'))

// habilitando as rotas
app.use(express.static("public"))

// habilitando o body da request 
app.use(express.urlencoded( { extended: true } ))

// habilite as rotas
app.use(routes)

// criae um servidor na porta 3003
app.listen('3003', () => {
    console.log('Rodando...')
})