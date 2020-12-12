import express from "express";
import { getHome, getLogin, getRegister, logout, postLogin, postRegister } from "../controller/mainController";
import routes from "../routes";
import { privateUser, publicUser } from "../middlewares";
import { search } from "../controller/searchController";

const globalRouter = express.Router();

globalRouter.get(routes.LOGIN, publicUser, getLogin);
globalRouter.post(routes.LOGIN, publicUser, postLogin);
globalRouter.get(routes.LOGOUT, privateUser, logout);

globalRouter.get(routes.REGISTER, publicUser, getRegister);
globalRouter.post(routes.REGISTER, publicUser, postRegister, postLogin);

globalRouter.get(routes.SEARCH,privateUser, search);
globalRouter.get(routes.HOME, privateUser, getHome);

export default globalRouter;