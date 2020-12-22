"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHome = exports.postRegister = exports.getRegister = exports.logout = exports.postLogin = exports.getLogin = void 0;

var _User = _interopRequireDefault(require("../model/User"));

var _passport = _interopRequireDefault(require("passport"));

var _routes = _interopRequireDefault(require("../routes"));

var _Video = _interopRequireDefault(require("../model/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 로그인/아웃
var getLogin = function getLogin(req, res) {
  res.render("login", {
    pageTitle: "로그인"
  });
};

exports.getLogin = getLogin;

var postLogin = _passport["default"].authenticate("local", {
  failureRedirect: "/",
  failureFlash: "아이디 혹은 패스워드가 다릅니다.",
  successRedirect: "/home"
});

exports.postLogin = postLogin;

var logout = function logout(req, res) {
  req.logout();
  res.redirect(_routes["default"].LOGIN);
}; //회원가입


exports.logout = logout;

var getRegister = function getRegister(req, res) {
  res.render("register", {
    pageTitle: "회원가입"
  });
};

exports.getRegister = getRegister;

var postRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var userId, userPassword, userPassword2, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.body.email;
            userPassword = req.body.password;
            userPassword2 = req.body.password2;

            if (!(userPassword !== userPassword2)) {
              _context.next = 9;
              break;
            }

            req.flash("error", "Password\uC640 Verify Password\uAC00 \uB2E4\uB985\uB2C8\uB2E4 !");
            res.status(400);
            res.render("register");
            _context.next = 22;
            break;

          case 9:
            _context.prev = 9;
            _context.next = 12;
            return (0, _User["default"])({
              email: userId
            });

          case 12:
            user = _context.sent;
            _context.next = 15;
            return _User["default"].register(user, userPassword);

          case 15:
            next();
            _context.next = 22;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](9);
            req.flash("error", "\uC544\uC774\uB514\uAC00 \uC911\uBCF5\uB429\uB2C8\uB2E4 !");
            res.render("register");

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 18]]);
  }));

  return function postRegister(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}(); //홈


exports.postRegister = postRegister;

var getHome = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var video;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Video["default"].find({});

          case 2:
            video = _context2.sent;
            res.render("home", {
              video: video,
              pageTitle: "홈페이지"
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getHome(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getHome = getHome;