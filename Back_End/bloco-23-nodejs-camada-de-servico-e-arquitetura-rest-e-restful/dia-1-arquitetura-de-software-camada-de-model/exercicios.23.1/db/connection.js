const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    user: 'root',
    password: 'root',
    host: 'localhost',
    database: 'users_crud',
    ports: '3306'
})

module.exports = connection;