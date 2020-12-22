"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commentDelete = exports.commentCreate = void 0;

var _Video = _interopRequireDefault(require("../model/Video"));

var _Comments = _interopRequireDefault(require("../model/Comments"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var commentCreate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var videoId, commentBody, authorId;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            videoId = req.params.id;
            commentBody = req.body.comment;
            authorId = req.user.id;
            _context.next = 6;
            return _Comments["default"].create({
              body: commentBody,
              author: authorId,
              videoId: videoId
            });

          case 6:
            res.redirect("/video/".concat(videoId));
            _context.next = 13;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            res.status(400);
            res.render("404");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function commentCreate(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.commentCreate = commentCreate;

var commentDelete = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var commentId, _comment, videoId;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            commentId = req.params.id;
            _context2.next = 4;
            return _Comments["default"].findByIdAndDelete(commentId);

          case 4:
            _comment = _context2.sent;
            videoId = _comment.videoId;
            res.redirect("/video/".concat(videoId));
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(400);
            res.render("404");

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function commentDelete(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.commentDelete = commentDelete;