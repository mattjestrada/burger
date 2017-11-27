var mysql = require('mysql');
var connection = mysql.createConnection({
        port: 3306,
        host: etdq12exrvdjisg6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com || 'localhost',
        user: a4siel8yxmkydrkp || 'root',
        password: duzsy134jylbj759 || 'kash2010',
        database: cczx13pzj93fokhw || 'burgers_db',
    });

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;