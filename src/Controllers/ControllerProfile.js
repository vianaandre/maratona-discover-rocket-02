// requirindo os data do model 
const Profile = require('../model/Profile')

module.exports = {
    async index(req, res) {
        const profile = await Profile.get()
        
        return res.render('profile',  { profile: profile })
    }, 

    // falando para ser um função assincrona porque iremos utilizar o await
    async update(req, res) {
        var profile = await Profile.get()

        // pegando todas as informações que viram com o post
        const data = req.body

        // pegar o total de semanas no ano
        const totalWeeks = 52
        // subtrair o total de semanas por total de semanas de feria e dividir por 12, para pegar a média do total de semanas por mês
        const weeksPerMonth = (totalWeeks - data.vacation_per_year) / 12

        // pegar o total de horas tralhadas por semana
        const hoursWeekWorked = data.hours_per_day * data.days_per_week   

        // multiplicar o total de horas por semana pela media de semana por mes
        const hoursMonthWorked = weeksPerMonth * hoursWeekWorked

        await Profile.update({
            ...profile,
            ...req.body,
            value_hours: hoursMonthWorked
        })

        res.redirect('/profile')
    }
}