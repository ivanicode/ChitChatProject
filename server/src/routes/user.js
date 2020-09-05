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
  closeConnection(connection);
})

module.exports = router; 

router.post('/login', (req, res) => {
  
  const connection = makeConnection();
  const data = req.body;
  console.log(data)
  
  let status = 200;

  const dbQuery = `select * from chitchat_account where email = '${data.login}' and password = '${data.loginPassword}'`
  
  connection.query(dbQuery, function (error, results) {
    if (error) {
      status = 500;
      res.status(status).send(error) //tu przesyłam obiekt błędu
      throw error;
    }
    console.log(results.length)
    if(!results.length){
      status = 404;
    }
    const userDoesNotExist = {
      message: 'Użytkownik nie istnieje' //tylko dla 404, dla statusu 200 obiekt ma być pusty
    }
    res.status(status).send(userDoesNotExist) //stworzyć obiekt błędu dla 404 z informacją, że użtkownik nie istnieje
  });
  
  closeConnection(connection);
})

