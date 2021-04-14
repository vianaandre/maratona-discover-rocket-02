const Job = require('../model/Job')
const Profile = require('../model/Profile')
const jobUtils = require('../utils/jobUtils')


module.exports = {
    // post da criação do job
    async save(req, res) {

        await Job.create({
            name: req.body.name, // name do form 
            daily_hours: req.body.daily_hours, // daily-hours
            total_hours: req.body.total_hours, // total-hours
            atribuitDate: Date.now()
        })

        return res.redirect('/')
    },

    // página de create job
    create(req, res) {
        return res.render('job')
    },

    //  página job-edit, mostrar atraves do id
    async show(req, res) {
        const Jobs = await Job.get()
        const profile = await Profile.get()

        const jobId = req.params.id

        // retornando apenas o objeto que corresponde a o id certo
        // precisamos dizer para o jobId que vem como string, para ela ser um number, a mesma coisa com o job.id, que pode definição já é um number
        const job = Jobs.find(job => Number(job.id) === Number(jobId))

        if (!job) {
            res.send('Not Job found!')
        }

        job.valueProject = jobUtils.valueProject(job.total_hours, profile.value_hours)

        return res.render('job-edit', {
            job
        })
    },

    // update do job atraves do id
    async update(req, res) {
        // pegando o id correspondente da página, que está no params
        const jobId = req.params.id

        const newJob = {
            name: req.body.name,
            daily_hours: req.body.daily_hours,
            total_hours: req.body.total_hours
        }

        await Job.update(newJob, jobId)

        res.redirect('/job/' + jobId)
    },

    // delete do job atraves do id 
    async delete(req, res) {
        // faz refência ao :id
        const jobId = req.params.id

        await Job.delete(jobId)

        return res.redirect('/')
    }
}