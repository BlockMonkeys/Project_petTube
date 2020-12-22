"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.search = void 0;

var _Video = _interopRequireDefault(require("../model/Video"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var search = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var searchingBy, searchedVideo, searchedVideo2, searched, searchedResult;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            searchingBy = req.query.searchingBy;
            _context.next = 3;
            return _Video["default"].find({
              title: {
                $regex: searchingBy,
                $options: "i"
              }
            });

          case 3:
            searchedVideo = _context.sent;
            _context.next = 6;
            return _Video["default"].find({
              description: {
                $regex: searchingBy,
                $options: "x"
              }
            });

          case 6:
            searchedVideo2 = _context.sent;
            searched = searchedVideo.concat(searchedVideo2);
            searchedResult = _lodash["default"].uniqBy(searched, "id");
            res.render('search', {
              searchedResult: searchedResult,
              pageTitle: searchingBy
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function search(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.search = search;