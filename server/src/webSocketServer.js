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
    
    const postData = queryString.stringify({
      'msg': msg
    });

    const options = {
      port: 8080,
      path: 'http://localhost:8080/api/user/conversations',
      method: 'POST',
    };

    const req = http.request(options, (res) => {
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
      });
      res.on('end', () => {
        console.log('No more data in response.');
      });
    });

    req.write(postData);

    req.end();
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
