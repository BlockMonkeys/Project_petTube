"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postVideoEdit = exports.getVideoEdit = void 0;

var _Video = _interopRequireDefault(require("../model/Video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getVideoEdit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var videoId, video;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            videoId = req.params.id;
            _context.next = 3;
            return _Video["default"].find({
              _id: videoId
            });

          case 3:
            video = _context.sent;
            res.render('edit', {
              video: video[0],
              pageTitle: "비디오수정페이지"
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getVideoEdit(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getVideoEdit = getVideoEdit;

var postVideoEdit = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var videoId, title, description;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            videoId = req.params.id;
            title = req.body.title;
            description = req.body.description;
            _context2.next = 6;
            return _Video["default"].findOneAndUpdate({
              _id: videoId
            }, {
              title: title,
              description: description
            });

          case 6:
            res.redirect("/video/".concat(videoId));
            _context2.next = 13;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            res.status(400);
            res.render('404');

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function postVideoEdit(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postVideoEdit = postVideoEdit;