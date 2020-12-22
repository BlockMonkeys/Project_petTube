"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

_mongoose["default"].connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

var db = _mongoose["default"].connection;
db.once("open", function () {
  return console.log("\u2705 DB is Connected!");
});
db.on("error", function (error) {
  return console.log("\u274C DB Problem : ".concat(error));
});