module.exports = {
    remainigDaysMissing(job) {
        // dividir o total-hours pelo daily-hours
        const totalDay = (job['total-hours'] / job['daily-hours']).toFixed();
        // criar uma variável onde será colocado o primeiro dia do projeto dentro de uma new Date
        const dayInitialProject = new Date(job.atribuitDate)

        // pegar o primeiro dia do projeto mais o tanto de dias para fazer ele
        const dayConclusionProject = dayInitialProject.getDate(dayInitialProject) + Number(totalDay)

        // setando uma nova Date
        const newDateProjectFinally = dayInitialProject.setDate(dayConclusionProject)

        // saber quantos dias faltam levando em consideração o dia atual
        const dayRemainingCurrent = newDateProjectFinally - Date.now()

        // criar uma variável que pegara os milliseconds de uma dia
        const dayMLS = 1000 * 60 * 60 * 24

        // restante de dia que faltam divido pela variével de mls
        const daysMissing = Math.ceil(dayRemainingCurrent / dayMLS)

        return daysMissing
    },
    valueProject: (totalHour, valueHour) => {
        return totalHour * valueHour
    }
}