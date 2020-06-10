const express = require('express');
const mysql = require('mysql');
const dbCredentials = require('./dbCredentials')

const router = express.Router();

router.get('/:id?', (req, res) => {
  console.log(req.params);

  const connection = mysql.createConnection(dbCredentials);

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT 1 + 1 AS solution', function (error, results) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  res
    .status(200)
    .send({ params: req.params });

  connection.end(function(err) {
    console.log(err, 'Connection ended')
  });
});

module.exports = router; 
