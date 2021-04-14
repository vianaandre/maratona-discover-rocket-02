const express = require('express');
const routes = express.Router()
// importando os controllers de profile
const ControllerProfile = require('./Controllers/ControllerProfile') 
// importando os controllers de job
const ControllerJob = require('./Controllers/ControllerJob')
// importando o dashbord que contém a routes para a page incial
const DahsbordController = require('./Controllers/DashbordController')

// passando as rotas 
// render = diz para renderizar esses arquivos que já estão executador pelo ejs
routes.get('/', DahsbordController.index)
routes.get('/job', ControllerJob.create)
routes.post('/job', ControllerJob.save)
routes.get('/job/:id', ControllerJob.show)
routes.post('/job/:id', ControllerJob.update)
routes.post('/job/delete/:id', ControllerJob.delete)
routes.get('/profile', ControllerProfile.index)
routes.post('/profile', ControllerProfile.update)

// exportando as routes
module.exports = routes;
