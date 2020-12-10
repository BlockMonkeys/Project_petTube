import express from "express";
import { deleteProcess } from "../controller/deleteController";
import { videoDetail } from "../controller/detailController";
import { getVideoEdit, postVideoEdit } from "../controller/editController";
import { getVideoUpload, postVideoUpload,  } from "../controller/uploadController";
import { uploadVideo } from "../middlewares";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.UPLOAD, getVideoUpload);
videoRouter.post(routes.UPLOAD, uploadVideo, postVideoUpload);

videoRouter.get(routes.EDIT, getVideoEdit);
videoRouter.post(routes.EDIT, postVideoEdit);

videoRouter.get(routes.DELETE, deleteProcess);

videoRouter.get(routes.DETAIL, videoDetail);

export default videoRouter;