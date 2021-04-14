const Database = require('../db/config')

module.exports = {
    async get() {

        // abrir conexão com o banco de dados
        const db = await Database()

        // buscando um unico dado da table profile que foi criada pelo banco de dados
        const data = await db.get(`SELECT * FROM profile`)

        // fechando a conexão
        await db.close()

        return data
    }, 

    async update(newData) {
        
        const db = await Database()

        db.run(`UPDATE profile SET
            name = "${newData.name}",
            avatar = "${newData.avatar}",
            monthly_budget = ${newData.monthly_budget},
            hours_per_day = ${newData.hours_per_day},
            days_per_week = ${newData.days_per_week},
            vacation_per_year = ${newData.vacation_per_year},
            value_hours = ${newData.value_hours}
        `)

        await db.close()
    }
}