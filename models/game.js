'use strict'

const {bookshelf} = require('../db/ormConfig')

const Favorite = require('./favorite')
const User = require('./user')

const Game = bookshelf.Model.extend({
	tableName: 'games',
	users: function() {
		return this.belongsToMany('User').through('Favorite')
	}
})

module.exports = bookshelf.model('Game', Game)
