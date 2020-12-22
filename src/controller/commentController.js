import Video from "../model/Video";
import Comments from "../model/Comments";

export const commentCreate = async(req, res) => {
    try{
        const videoId = req.params.id;
        const commentBody = req.body.comment;
        const authorId = req.user.id;
        await Comments.create({
            body:commentBody,
            author: authorId,
            videoId: videoId,
        });
        res.redirect(`/video/${videoId}`);
    } catch(error) {
        res.status(400);
        res.render("404");
    }
}

export const commentDelete = async(req, res) => {
    try{
        const commentId = req.params.id;
        const _comment = await Comments.findByIdAndDelete(commentId);
        const videoId = _comment.videoId;
        res.redirect(`/video/${videoId}`);
    }catch(error){
        res.status(400);
        res.render("404");
    }
}