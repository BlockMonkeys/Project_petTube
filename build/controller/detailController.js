"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.videoDetail = void 0;

var _Video = _interopRequireDefault(require("../model/Video"));

var _Comments = _interopRequireDefault(require("../model/Comments"));

var _User = _interopRequireDefault(require("../model/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var videoDetail = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var videoId, video, user, comments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            videoId = req.params.id;
            _context.next = 3;
            return _Video["default"].findById(videoId);

          case 3:
            video = _context.sent;
            _context.next = 6;
            return _User["default"].findById(video.creator);

          case 6:
            user = _context.sent;
            _context.next = 9;
            return _Comments["default"].find({
              videoId: videoId
            }).populate("author");

          case 9:
            comments = _context.sent;

            if (user.id !== req.user.id) {
              video.views++;
              video.save();
            }

            res.render('detail', {
              video: video,
              comments: comments,
              user: user.email,
              pageTitle: "비디오상세페이지"
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function videoDetail(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.videoDetail = videoDetail;