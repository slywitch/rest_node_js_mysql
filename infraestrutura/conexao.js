const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'alura',
    password: 'alura',
    database: 'agenda-petshop'
})

module.exports = conexao 