# Nodejs

```
npm init
npm install
```

### 서버를 열어주기위한 express

```
npm install express
```

### 내용이 바뀌어 저장만 하면 서버를 재시작해줌

```
npm install nodemon
```

### Post 방식과 json 형식을 이용하기위한 module

```
npm install body-parser
```

```
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

### static 형식

- static 형식으로 선언을 해줘야 서버가 폴더안의 파일을 인식을 함

```
app.use(express.static('folder_name'));
```

### get,post 방식

- submit을 누르게 된다면

```
<form action="/email_post" method="POST">
      email : <input type="text" name="email" /><br />
      <input type="submit" />
    </form>
```

- app.js 에서 받아오는 방식

```
app.post('/email_post', function(req, res) {

  // get이라면 이런식으로 받아올 수 있다.
  // req.param('email')

  console.log(req.body.email);
  res.send(`<h1>${req.body.email}</h1>`);
});
```

### template engine ejs

```
npm install ejs
```

EJS는 템플릿이 되는 HTML 코드에 특수 태그를 사용하여 필요한 정보를 포함할 수 있다. 준비되어 있는 태그는 다음 두 가지이다.

```
<%= 값 %>
```

작성한 값을 그 자리에 써 낸다. 스크립트 측에서 준비한 변수 등을 표시하는데 사용한다. HTML 태그 등이 포함되어 있는 경우, 그들은 이스케이프 처리된다.

```
<%- 값 %>
```

마찬가지로 값을 그 자리에 써 낸다. 다만, 이곳은 HTML 관련 태그는 이스케이프 처리되지 않고 그대로 쓰여진다.

```
<% 스크립트 %>
```

스크립트를 작성하고, 그것을 렌더링할 때 실행한다. 이것은 HTML에 <script> 태그로 작성된 스크립트와는 다르다. <script> 태그는 클라이언트(브라우저)에 보내져 실행되지만, 이 <% %>으로 작성된 태그는 서버 사이드(Node.js 내)에서 실행되어 그 결과가 클라이언트로 보내진다.

app.js

```
app.post('/email_post', function(req, res) {
  //get : req.param('email')
  console.log(req.body.email);
  //email.ejs에 email 데이터로 넘겨줘라
  res.render('email.ejs', { email: req.body.email });
});
```

email.ejs

```
<h1>Welcome !! <%= email %></h1>
```
