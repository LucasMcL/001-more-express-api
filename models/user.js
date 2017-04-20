'use strict'

const {bookshelf} = require('../db/ormConfig')

const Favorite = require('./favorite')
const Game = require('./game')

const User = bookshelf.Model.extend({
	tableName: 'users',
	games: function() {
		return this.belongsToMany('Game').through('Favorite')
	}
}, {
	getAllWithFavorites: function() {
		return this.forge().fetchAll({withRelated: ['games']})
	}
})

module.exports = bookshelf.model('User', User)
