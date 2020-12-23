"use strict";

var _express = _interopRequireDefault(require("express"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _passport = _interopRequireDefault(require("passport"));

var _expressFlash = _interopRequireDefault(require("express-flash"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _connectMongo = _interopRequireDefault(require("connect-mongo"));

require("./db");

require("./model/User");

require("./model/Video");

require("./passport");

var _globalRouter = _interopRequireDefault(require("./router/globalRouter"));

var _videoRouter = _interopRequireDefault(require("./router/videoRouter"));

var _middlewares = require("./middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

//미들웨어 && 기초셋팅
var app = (0, _express["default"])();
var PORT = 4000;
app.set("views", _path["default"].join(__dirname, "views"));
app.use("/uploads", _express["default"]["static"](_path["default"].join(__dirname + "uploads")));
app.use("/static", _express["default"]["static"](_path["default"].join(__dirname + "static")));
app.use((0, _cookieParser["default"])());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
app.set("view engine", "pug"); //회원가입

var CokieStore = (0, _connectMongo["default"])(_expressSession["default"]);
app.use((0, _expressSession["default"])({
  secret: process.env.COOKIE_SECRET,
  resave: true,
  saveUninitialized: false,
  store: new CokieStore({
    mongooseConnection: _mongoose["default"].connection
  })
}));
app.use((0, _expressFlash["default"])());
app.use(_passport["default"].initialize());
app.use(_passport["default"].session());
app.use(_middlewares.globalVar); //받은 req.user를 위해 쿠키 생성 이후로 내림
//라우터

app.use('/', _globalRouter["default"]);
app.use('/video', _videoRouter["default"]);
app.listen(PORT, function () {
  return console.log("\u2705 Express Running at PORT ".concat(PORT));
});