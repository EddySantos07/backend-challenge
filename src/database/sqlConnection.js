
let mysql = require('mysql2');

let connection = mysql.createPool({
    host: "mysql",
    user: 'root',
    password: 'password'
});

module.exports.connection = connection;

