const mysql = require('mysql');
const dbCredentials = require('./dbCredentials')

function makeConnection(){
    const connection = mysql.createConnection(dbCredentials); //obiekt połączenia z bazą danych

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });
  return connection;
}

function closeConnection(connection){
    connection.end(function(err) {
        console.log(err, 'Connection ended')
    });
}

module.exports = {
    makeConnection,
    closeConnection
}
