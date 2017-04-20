'use strict'

const Game = require('../models/game')

module.exports.getAllGames = function(req, res, next) {
	Game.fetchAll()
		.then(games => res.json({games}))
		.catch(err => res.json(err))
}

