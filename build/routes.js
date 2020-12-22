"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var routes = {
  //Global Router
  LOGIN: '/',
  LOGOUT: '/logout',
  REGISTER: '/register',
  HOME: '/home',
  SEARCH: '/search',
  //video Router
  UPLOAD: '/upload',
  DETAIL: '/:id',
  EDIT: '/:id/edit',
  DELETE: '/:id/delete',
  COMMENT: '/:id/comment',
  COMMENT_DELETE: '/:id/comment_delete'
};
var _default = routes;
exports["default"] = _default;