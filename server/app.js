
const https = require('https');
const fs = require('fs');
const express = require('express')
const session = require('express-session');
const indexRouter = require('./routes');
const app = express()
const PORT = 5999

const cors = require('cors')
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MySQLStore = require('express-mysql-session')(session);
const options = {
    host: '127.0.0.1',
    port: 3306, //*DB port
    user: 'root',
    password: '1111',
    database: '3tierlogin_test'
};
const sessionStore = new MySQLStore(options);

app.use(session({
  key: "keyin",
  secret: '1234DFSD!@#$ASDF123asd',
  store: sessionStore,
  resave: false,//* false 세션데이터를 변경될때만 세션 저장소 값을 저장한다 true 안바뀌어도 계속 저장한다
  saveUninitialized: true, //*true 세션이 필요하기 전까지 세션을 구동하지 않는다
  cookie: {
      domain: 'localhost',
      maxAge: 60 * 6 * 4,
      sameSite: 'none',
      secure: true,   //* https 일때만 쿠키 발행
      httpOnly: false, //* 웹브라우저 웹서버가 통신할때만 쿠키를 발행 *JS로는 쿠키를 볼수 없다는 이야기
  }
}));

app.use('/', indexRouter);

let server;
if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  server = https.createServer(
      {
        key: fs.readFileSync(__dirname + `/` + 'key.pem', 'utf-8'),
        cert: fs.readFileSync(__dirname + `/` + 'cert.pem', 'utf-8'),
      },
      app
    )
    .listen(PORT);
} else {
  server = app.listen(PORT)
}

module.exports = server;

// https://localhost:5999/users/login