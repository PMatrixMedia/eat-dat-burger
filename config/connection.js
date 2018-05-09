// JavaScript source code
const mysql = require('mysql2');

var config =
    {
        host: 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.co',
        user: 'bpczbv2q4g5khxzo',
        password: 'supn3d7jyoml267j',
        database: 'izhmmav497ocou2w',
        port: 3306,
        ssl: true
    };
var connstring = 'mysql://bpczbv2q4g5khxzo:supn3d7jyoml267j@otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/izhmmav497ocou2w'

const conn = new mysql.createConnection(connstring);



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
            for (i = 1; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
   
};
;

function insertData() {
    
    conn.query('INSERT INTO burgers (Burger_name) VALUES (?);', ['ham swiss mayo green pepper onion'],
        function (err, results, fields) {
            if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })

    conn.query('INSERT INTO burgers (Burger_name) VALUES (?);', ['pBj & venison'],
        function (err, results, fields) {
            if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })


    conn.query('INSERT INTO burgers (Burger_name) VALUES (?);', ['chicken philly'],
        function (err, results, fields) {
            if (err) throw err;
            console.log('Inserted ' + results.affectedRows + ' row(s).');
        })

};


module.exports = conn;