'use strict'

const {Router} = require('express')
const usersRoutes = Router()

const {getAllUsers, getUsersFavorites} = require('../controllers/usersCtrl')

usersRoutes.get('/users', getAllUsers)
usersRoutes.get('/users/favorites', getUsersFavorites)

module.exports = {usersRoutes}
