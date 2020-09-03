const express = require('express');
const dbHelpers = require('../helpers/db');

const router = express.Router();

const {makeConnection, closeConnection} = dbHelpers;

router.get('/:id?', (req, res) => {
  console.log(req.params);

  const connection = makeConnection();

  connection.query('SELECT 1 + 1 AS solution', function (error, results) {
    if (error) {
      throw error;
    }
    console.log('The solution is: ', results[0].solution);
  });

  res
    .status(200)
    .send({ params: req.params });

    closeConnection(connection);
});
router.post('', (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  console.log(data)
  const dbQuery = `insert into chitchat_account (first_name, last_name, birth_date, email, password) values ('${data.firstName}', '${data.lastName}', '${data.date}', '${data.mail}', '${data.originalPassword}')`
  console.log(dbQuery)

  connection.query(dbQuery, function (error, results) {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.status(204).send()
  closeConnection(connection);6
})
module.exports = router; 

router.post('/Login', (req, res) => {
  console.log(req.body)
})