import routes from "./routes";
import multer from "multer";

export const globalVar = (req, res, next) => {
    res.locals.siteName = "PetTube";
    res.locals.loggedUser = req.user || null;
    next();
};

//접근제한 권한설정 미들웨어
export const privateUser = (req, res, next) => {
    if(req.user){
        next();
    } else {
        res.redirect(routes.LOGIN);
    }
};

export const publicUser = (req, res, next) => {
    if(!req.user){
        next();
    } else {
        res.redirect(routes.HOME);
    }
};

const multerVideo = multer({ dest: "uploads/videos/" });
export const uploadVideo = multerVideo.single("file");