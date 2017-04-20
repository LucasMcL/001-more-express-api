// /games
// /users
// /users/favorites

const {Router} = require('express')
const routes = Router()

const {gamesRoutes} = require('./gamesRt')
const {usersRoutes} = require('./usersRt')

routes.get('/', (req, res, next) => {
	res.json({
		users: '/users',
		games: '/games',
		favorites: '/users/favorites'
	})
})
routes.use(gamesRoutes)
routes.use(usersRoutes)

module.exports = {routes}
