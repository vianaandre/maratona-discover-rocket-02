const Database = require('../db/config')

// setando para podermos pegar os dados desse arquivo
module.exports = {
    async get() {

        const db = await Database()

        // o comando all, seleciona todos os dados de uma vez
        const data = await db.all(`SELECT * FROM jobs`)

        await db.close()

        return data
    },
    async update(newJob, jobId) {
        const db = await Database()
        
        await db.run(`UPDATE jobs SET
        name = "${newJob.name}", 
        daily_hours = ${newJob.daily_hours}, 
        total_hours = ${newJob.total_hours}
        WHERE id = ${jobId}
        `)

        await db.close()
    }, 
    async delete(id) {
        const db = await Database()

        // mandando deletar o grupo de dados que contém esse id especifico do parametro 
        await db.run(`DELETE FROM jobs WHERE id = ${id}`)

        await db.close()
    }, 
    async create(newJob) {
        const db = await Database()

        await db.run(`INSERT INTO jobs (
            name, 
            daily_hours, 
            total_hours, 
            atribuitDate
        ) VALUES (
            "${newJob.name}",
            ${newJob.daily_hours}, 
            ${newJob.total_hours}, 
            ${newJob.atribuitDate}
        )`)

        await db.close()
    }
}