"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _mainController = require("../controller/mainController");

var _routes = _interopRequireDefault(require("../routes"));

var _middlewares = require("../middlewares");

var _searchController = require("../controller/searchController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].LOGIN, _middlewares.publicUser, _mainController.getLogin);
globalRouter.post(_routes["default"].LOGIN, _middlewares.publicUser, _mainController.postLogin);
globalRouter.get(_routes["default"].LOGOUT, _middlewares.privateUser, _mainController.logout);
globalRouter.get(_routes["default"].REGISTER, _middlewares.publicUser, _mainController.getRegister);
globalRouter.post(_routes["default"].REGISTER, _middlewares.publicUser, _mainController.postRegister, _mainController.postLogin);
globalRouter.get(_routes["default"].SEARCH, _middlewares.privateUser, _searchController.search);
globalRouter.get(_routes["default"].HOME, _middlewares.privateUser, _mainController.getHome);
var _default = globalRouter;
exports["default"] = _default;