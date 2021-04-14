const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

module.exports = () => 
    // essa função configura a conexão com o banco de dados e a nossa aplicação
    open({
        // estou dizendo aonde salvar os dados
        filename: './database.sqlite',
        // estou falando quem vai ser o responsavel por fazer a função de guardar esses dados
        driver: sqlite3.Database,
    })
