"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadVideo = exports.publicUser = exports.privateUser = exports.globalVar = void 0;

var _routes = _interopRequireDefault(require("./routes"));

var _multer = _interopRequireDefault(require("multer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalVar = function globalVar(req, res, next) {
  res.locals.siteName = "PetTube";
  res.locals.loggedUser = req.user || null;
  next();
}; //접근제한 권한설정 미들웨어


exports.globalVar = globalVar;

var privateUser = function privateUser(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.redirect(_routes["default"].LOGIN);
  }
};

exports.privateUser = privateUser;

var publicUser = function publicUser(req, res, next) {
  if (!req.user) {
    next();
  } else {
    res.redirect(_routes["default"].HOME);
  }
};

exports.publicUser = publicUser;
var multerVideo = (0, _multer["default"])({
  dest: "uploads/videos/"
});
var uploadVideo = multerVideo.single("file");
exports.uploadVideo = uploadVideo;