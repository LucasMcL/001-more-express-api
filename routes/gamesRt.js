'use strict'

const {Router} = require('express')
const gamesRoutes = Router()

const {getAllGames} = require('../controllers/gamesCtrl')

gamesRoutes.get('/games', getAllGames)

module.exports = {gamesRoutes}
