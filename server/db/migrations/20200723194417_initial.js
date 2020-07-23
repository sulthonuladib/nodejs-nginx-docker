const tableNames = require('../../helpers/tableNames')

exports.up = async (knex) => {
    await knex.schema.createTable(tableNames.user, (table) => {
        table.increments();
        table.string('username').notNullable();
        table.string('email', 254).notNullable().unique();
        table.string('password').notNullable();
        table.timestamps(true, false)
        table.datetime('deleted_at');
    });

};

exports.down = async (knex) => {
    await knex.schema.dropTable(tableNames.user)
};
