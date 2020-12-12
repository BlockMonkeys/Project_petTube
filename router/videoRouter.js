import express from "express";
import { commentCreate, commentDelete } from "../controller/commentController";
import { deleteProcess } from "../controller/deleteController";
import { videoDetail } from "../controller/detailController";
import { getVideoEdit, postVideoEdit } from "../controller/editController";
import { getVideoUpload, postVideoUpload,  } from "../controller/uploadController";
import { privateUser, uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.UPLOAD, privateUser, getVideoUpload);
videoRouter.post(routes.UPLOAD, privateUser, uploadVideo, postVideoUpload);

videoRouter.get(routes.EDIT, privateUser, getVideoEdit);
videoRouter.post(routes.EDIT, privateUser, postVideoEdit);

videoRouter.get(routes.DELETE, privateUser, deleteProcess);
videoRouter.post(routes.COMMENT, privateUser, commentCreate);
videoRouter.get(routes.COMMENT_DELETE, privateUser, commentDelete);

videoRouter.get(routes.DETAIL, privateUser, videoDetail);

export default videoRouter;