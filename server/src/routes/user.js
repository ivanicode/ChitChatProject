const express = require('express');
const dbHelpers = require('../helpers/db');
const multer = require('multer');

const fileHelpers = require('../helpers/files')

const router = express.Router();
const upload = multer({dest: '/tmp'});

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

router.post('/details', upload.single('picture'), (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  console.log('req.file', req.file)
  const inputfile = req.file.path;
  const photo = fileHelpers.readImageFile(inputfile); 

  const dbQuery = "insert into chitchat_user_details (user_id, nickname, city, gender, picture, interests, relationship) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const values = [
    parseInt(req.cookies.user, 10),
    data.nickname,
    data.city,
    data.gender,
    photo,
    data.interests,
    data.relationship
  ];
   
  connection.query(dbQuery, values, function (error, results) {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.status(204).send()
  closeConnection(connection);
})

router.post('/details2', (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  console.log('req.body', req.body)
  const dbQuery = `UPDATE chitchat_user_details 
  SET 
  distance = '${data.distance}',
  interest_pairing = '${data.interests}',
  gender_pairing = '${data.gender}',
  age_pairing = '${data.age}'

  WHERE
  user_id = ${parseInt(req.cookies.user, 10)}`
  console.log('dbQuery', dbQuery)
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
