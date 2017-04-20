exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('favorites', function(table) {
			table.increments()
			table.integer('user_id').unsigned().references('users.id')
			table.integer('game_id').unsigned().references('games.id')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('favorites')
};
