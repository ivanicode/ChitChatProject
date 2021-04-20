const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 8082;
const https = require('http')

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    
    const data = JSON.stringify({
      message: msg[0],
      user: msg[1]
    })
  
    const options = {
      method: 'POST',
      host: 'localhost',
      port: 8080,
      path: '/api/user/conversations',
      headers: {
        "Content-Type": "application/json",
        "Content-length": data.length
      }
    };

    const callback = function(response) {
      let str = ''
      response.on('data', function (chunk) {
        str += chunk;
      });
      response.on('end', function () {
        console.log(str);
      });
    }
    const req = https.request(options, callback);
    req.write(data)
    req.end()
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
