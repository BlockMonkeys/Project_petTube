"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentSchema = new _mongoose["default"].Schema({
  body: {
    type: String,
    required: true
  },
  author: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    "default": Date.now()
  },
  videoId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Video"
  }
});

var model = _mongoose["default"].model("Comment", CommentSchema);

var _default = model;
exports["default"] = _default;