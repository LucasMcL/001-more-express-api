exports.up = function(knex, Promise) {
	return knex.schema
		.createTable('games', function(table) {
			table.increments()
			table.string('title').notNullable()
			table.integer('release_year').unsigned()
			table.string('publisher')
		})
};

exports.down = function(knex, Promise) {
	return knex.schema
		.dropTable('games')
};
