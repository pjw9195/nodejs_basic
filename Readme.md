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
