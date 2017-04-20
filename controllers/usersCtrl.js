const User = require('../models/user')

module.exports.getAllUsers = function(req, res, next) {
	User.forge().fetchAll()
		.then(users => res.json({users}))
		.catch(err => res.json(err))
}

module.exports.getUsersFavorites = function(req, res, next) {
	User.getAllWithFavorites()
		.then(users => res.json({users}))
		.catch(err => res.json(err))
}
