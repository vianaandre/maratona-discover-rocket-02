const Database = require("./config")



const Initdb = {
    async init() {

        // iniciando a conexão
    const db = await Database()

        // falando para executar os comandos SQL
        // dizendo para criar a table profile com esses determinados campos
    db.exec(`
    CREATE TABLE profile(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    name TEXT, 
    avatar TEXT, 
    monthly_budget INT, 
    hours_per_day INT, 
    days_per_week INT, 
    vacation_per_year INT,
    value_hours INT
)`);

        // falando para criar a table jobs com esses determinados campos
    db.exec(`CREATE TABLE jobs(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT, 
    atribuitDate DATATIME
)`)

        // setando os valores dos campos de profile
    db.run(`INSERT INTO profile(
    name, 
    avatar, 
    monthly_budget, 
    hours_per_day, 
    days_per_week, 
    vacation_per_year, 
    value_hours
) VALUES ( 
    "André", 
    "https://github.com/vianaandre.png", 
    3000, 
    6,
    5,
    2, 
    30
)`)

        // setando os valores dos campos de jobs
    db.run(`INSERT INTO jobs(
    name, 
    daily_hours, 
    total_hours, 
    atribuitDate
) VALUES (
    "Pizzaria",
    5,
    50, 
    1617931566028
)`)

    db.run(`INSERT INTO jobs(
    name, 
    daily_hours, 
    total_hours, 
    atribuitDate
) VALUES (
    "OneTwo Biticon",
    2,
    20, 
    1617931566028
)`)

        // fechando a conexão
    db.close()

    }
}

// chamando a função que cria o banco de dados
Initdb.init()
