"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _commentController = require("../controller/commentController");

var _deleteController = require("../controller/deleteController");

var _detailController = require("../controller/detailController");

var _editController = require("../controller/editController");

var _uploadController = require("../controller/uploadController");

var _middlewares = require("../middlewares");

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var videoRouter = _express["default"].Router();

videoRouter.get(_routes["default"].UPLOAD, _middlewares.privateUser, _uploadController.getVideoUpload);
videoRouter.post(_routes["default"].UPLOAD, _middlewares.privateUser, _middlewares.uploadVideo, _uploadController.postVideoUpload);
videoRouter.get(_routes["default"].EDIT, _middlewares.privateUser, _editController.getVideoEdit);
videoRouter.post(_routes["default"].EDIT, _middlewares.privateUser, _editController.postVideoEdit);
videoRouter.get(_routes["default"].DELETE, _middlewares.privateUser, _deleteController.deleteProcess);
videoRouter.post(_routes["default"].COMMENT, _middlewares.privateUser, _commentController.commentCreate);
videoRouter.get(_routes["default"].COMMENT_DELETE, _middlewares.privateUser, _commentController.commentDelete);
videoRouter.get(_routes["default"].DETAIL, _middlewares.privateUser, _detailController.videoDetail);
var _default = videoRouter;
exports["default"] = _default;