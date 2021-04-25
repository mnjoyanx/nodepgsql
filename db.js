const { Pool } = require('pg')

const pool = new Pool({
    user: 'root',
    password: 998999,
    host: 'localhost',
    port: 5432,
    database: 'first'
})

module.exports = pool