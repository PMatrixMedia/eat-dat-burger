// JavaScript source code
const mysql = require('mysql2');

var config =
    {
        host: 'restaurantcohort-mysqldbserver.mysql.database.azure.com',
        user: 'mysqldbuser@restaurantcohort-mysqldbserver',
        password: 'Smucohort12345',
        database: 'burger',
        port: 3306,
        ssl: true
    };

const conn = new mysql.createConnection(config);


conn.connect(
    function (err) {
        if (err) {
            console.log("!!! Cannot connect !!! Error:");
            throw err;
        }
        else {
            console.log("Connection established.");
            readData();
        }
    });

function readData() {
    conn.query('SELECT * FROM burgers',
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
};

module.exports = conn;