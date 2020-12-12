import Video from "../model/Video";
import routes from "../routes";

export const getVideoUpload = (req, res)=> {
    res.render('upload', { pageTitle: "비디오업로드"});
}

export const postVideoUpload = async(req, res)=> {
    try{
        const contentTitle = req.body.title;
        const contentDescription = req.body.description;
        const fileUrl = req.file.path;
        const userId = req.user._id;
        await Video.create({
            title: contentTitle,
            description: contentDescription,
            fileUrl: fileUrl,
            creator: userId,
        });
        res.redirect(routes.HOME);
    }catch(error){
        res.status(400);
        res.render("404");
    }
}