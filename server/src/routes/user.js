const express = require('express');
const dbHelpers = require('../helpers/db');
const multer = require('multer');

const fileHelpers = require('../helpers/files')

const router = express.Router();
const upload = multer({dest: '/tmp'});


const {makeConnection, closeConnection} = dbHelpers;

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
  const data = JSON.parse(req.body.form);
  const inputfile = req.file.path;
  const photo = fileHelpers.readImageFile(inputfile); 

  const dbQuery = "insert into chitchat_user_details (user_id, nickname, city, gender, picture, interests, relationship) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const values = [
    parseInt(req.cookies.user, 10),
    data.nickname,
    data.city,
    data.gender,
    photo,
    data.interests.toString(),
    data.relationship
  ];
  connection.query(dbQuery, values, function (error, results) {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.status(200).send({interests: data.interests})
  closeConnection(connection);
})

router.post('/details2', (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  const dbQuery = `UPDATE chitchat_user_details 
  SET 
  distance = '${data.distance}',
  interest_pairing = '${data.interests}',
  gender_pairing = '${data.gender}',
  age_pairing = '${data.age}'

  WHERE
  user_id = ${parseInt(req.cookies.user, 10)}`
  connection.query(dbQuery, function (error, results) {
    if (error) {
      throw error;
    }
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
  
  let status = 200;

  const dbQuery = `select * from chitchat_user_details where user_id = ${parseInt(req.cookies.user, 10)}`
  connection.query(dbQuery, function (error, results) {
    if(error){
      res.status(500).send(error)
    }
    res.status(200).send(results[0])
    /*if (error) {
      status = 500;
      res.status(status).send(error) //tu przesyłam obiekt błędu
      throw error;
    } else {
      status = 200;
      res.status(status).send(results)
    }*/
  closeConnection(connection);
  })
})
router.get('', (req, res) => {
  
  const connection = makeConnection();
  
  let status = 200;

  const dbQuery = `select * from chitchat_account where id = ${parseInt(req.cookies.user, 10)}`
  connection.query(dbQuery, function (error, results) {
    if(error){
      res.status(500).send(error)
    }

    res.status(200).send(results[0])
    /*if (error) {
      status = 500;
      res.status(status).send(error) //tu przesyłam obiekt błędu
      throw error;
    } else {
      status = 200;
      res.status(status).send(results)
    }*/
  closeConnection(connection);
  })
})

router.post('/conversations', (req, res) => {
  const connection = makeConnection();
  const data = req.body;
  console.log('!!!', req.cookies.user)
  const dbQuery = `insert into chitchat_conversations (user_id, message) values ('${1}', '${data.message}')`
  connection.query(dbQuery, function (error, results) {
    if (error) {
      throw error;
    }
    console.log(results);
  });

  res.status(204).send()
  closeConnection(connection);
})
