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
  const dbQuery = `insert into chitchat_account (first_name, last_name, birth_date, email, password) values ('${data.firstName}', '${data.lastName}', '${data.date}', '${data.mail}', '${data.originalPassword}')`

  connection.query(dbQuery, function (error, results) {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.status(204).send()
  closeConnection(connection);
})

router.post('/details', (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  console.log(req.cookie, req.cookies)
  const dbQuery = `insert into chitchat_user_details (user_id, nickname, city, gender, picture, interests, relationship) values (${parseInt(req.cookies.user, 10)}, '${data.nickname}', '${data.city}', '${data.gender}', '${data.picture}', '${data.interests}', '${data.relationship}')`

  connection.query(dbQuery, function (error, results) {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.status(204).send()
  closeConnection(connection);
})

router.post('/details/2', (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  console.log(req.cookie, req.cookies)
  const dbQuery = `UPDATE chitchat_user_details 
  SET 
  distance = '${data.distance}',
  interest_pairing = '${data.interest_pairing}',
  gender_pairing = '${data.gender_pairing}',
  age_pairing = '${data.age_pairing}'

  WHERE
  user_id = ${parseInt(req.cookies.user, 10)}`

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
  
  let status = 200;

  const dbQuery = `select * from chitchat_account where email = '${data.login}' and password = '${data.loginPassword}'`
  
  connection.query(dbQuery, function (error, results) {
    if (error) {
      status = 500;
      res.status(status).send(error) //tu przesyłam obiekt błędu
      throw error;
    } 
    if(!results.length){
      status = 404;
    }
    let returnObject = JSON.stringify(results[0]);
    if(status === 404){
      returnObject = {message: 'Użytkownik nie istnieje'}
    }
    res.status(status).send(returnObject) //stworzyć obiekt błędu dla 404 z informacją, że użtkownik nie istnieje
  });
  
  closeConnection(connection);
})

router.get('/details', (req, res) => {
  
  const connection = makeConnection();
  const data = req.body;
  
  let status = 200;

  const dbQuery = `select * from chitchat_user_details where user_id = '${parseInt(req.cookies.user, 10)}'`
  
  connection.query(dbQuery, function (error, results) {
    if (error) {
      status = 500;
      res.status(status).send(error) //tu przesyłam obiekt błędu
      throw error;
    } else {
      status = 200;
      res.status(status).send(results)
    } 
  closeConnection(connection);
  })
})
