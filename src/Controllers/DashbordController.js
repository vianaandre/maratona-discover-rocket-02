const Job = require('../model/Job')
const jobUtils = require('../utils/jobUtils')
const Profile = require('../model/Profile')

module.exports = {
    // page inicial - dashbord
    async index(req, res) {
        // armazenando os dada dentro dessa constante
        const Jobs = await Job.get()
        // exemplificar que deve se esperar a requisição desses dados 
        const profile = await Profile.get()

        // criando um objeto de status
        let countStates = {
            progress: 0,
            done: 0,
            total: Jobs.length
        }

        // criando a variável que vai somar todas as horas que tenho que cumprir nos meus projeto no dia
        let jobsTotalHoursDay = 0

        const uptadeDeadline = Jobs.map(job => {
            const daysMissing = jobUtils.remainigDaysMissing(job)
            const status = daysMissing <= 0 ? 'done' : 'progress'

            // ou o done ou progress vai receber mais um, isso vai depender do que o status me der
            countStates[status] += 1

            // operador ternario vai verificar o status e a partir disso vai pegar a variável jobsTotalHoursDay e somar com o total-per-day do determinado projeto em status
            jobsTotalHoursDay = status === 'progress' ? jobsTotalHoursDay + Number(job.daily_hours) : jobsTotalHoursDay

            return {
                ...job,
                daysMissing,
                status,
                valueProject: jobUtils.valueProject(job.total_hours, profile.value_hours)
            }
        })

        const freeHours = profile.hours_per_day - jobsTotalHoursDay 

        return res.render('index', {
            jobs: uptadeDeadline,
            profile,
            status: countStates, 
            freeHours,
        })
    },
}