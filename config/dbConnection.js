var mysql = require('mysql');
module.exports = function (){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '6505Feli',
        database: 'portal_noticias'
    });
} 
