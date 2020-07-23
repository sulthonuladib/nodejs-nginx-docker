const crypto = require('crypto');
const tableNames = require('../../helpers/tableNames')

exports.seed = async (knex) => {

    const password = crypto.randomBytes(15).toString('hex')

    const user = {
        username: 'sulthonuladib',
        email: 'adibcyber4rt@gmail.com',
        password: password,
    }

    knex(tableNames.user).insert(user);

    console.log("Created user: ", user)
};