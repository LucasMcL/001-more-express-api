'use strict'

const {bookshelf} = require('../db/ormConfig')

const User = require('./user')
const Game = require('./game')

const Favorite = bookshelf.Model.extend({
	tableName: 'favorites',
	user: function() {
		return this.belongsTo('User')
	},
	game: function() {
		return this.belongsTo('Game')
	},
})

module.exports = bookshelf.model('Favorite', Favorite)
