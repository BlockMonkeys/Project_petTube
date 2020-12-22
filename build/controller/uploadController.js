"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postVideoUpload = exports.getVideoUpload = void 0;

var _Video = _interopRequireDefault(require("../model/Video"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getVideoUpload = function getVideoUpload(req, res) {
  res.render('upload', {
    pageTitle: "비디오업로드"
  });
};

exports.getVideoUpload = getVideoUpload;

var postVideoUpload = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var contentTitle, contentDescription, fileUrl, userId;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            contentTitle = req.body.title;
            contentDescription = req.body.description;
            fileUrl = req.file.path;
            userId = req.user._id;
            _context.next = 7;
            return _Video["default"].create({
              title: contentTitle,
              description: contentDescription,
              fileUrl: fileUrl,
              creator: userId
            });

          case 7:
            res.redirect(_routes["default"].HOME);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            res.status(400);
            res.render("404");

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function postVideoUpload(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.postVideoUpload = postVideoUpload;