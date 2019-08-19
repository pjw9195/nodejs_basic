var express = require('express');
var app = express();
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '1234',
  database: 'jsman',
});
connection.connect();
//post 형식으로 받기위한 body-parser
var bodyParser = require('body-parser');

app.listen(3000, function() {
  console.log('port 3000 start!!!');
});

//template engine ejs 선언
app.set('view engine', 'ejs');
//public 내의 main.js 를 불러오기위한 코드
//json과 아스키코드 외의 형태로오는 문자를 body-parser로 처리해줌.
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/main.html'); //html 파일 연결해줌.
});

app.get('/main', function(req, res) {
  res.sendFile(__dirname + '/public/main.html');
});

app.post('/email_post', function(req, res) {
  //get : req.param('email')
  console.log(req.body.email);
  //email.ejs에 email 데이터로 넘겨줘라
  res.render('email.ejs', { email: req.body.email });
});

app.post('/ajax_send_email', function(req, res) {
  var email = req.body.email;
  var responseData = {};
  var query = connection.query(
    'select name from user where email="' + email + '"',
    function(err, rows) {
      if (err) {
        throw err;
      }
      if (rows[0]) {
        console.log(rows[0].name + 'hit');
        responseData.name = rows[0].name;
      } else {
        console.log('none : ' + rows[0]);
        responseData.name = '';
      }
      res.json(responseData);
    }
  );
});
