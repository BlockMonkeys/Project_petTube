import Video from "../model/Video";
import Comment from "../model/Comments";
import User from "../model/User";

export const videoDetail = async(req, res)=> {
    const videoId = req.params.id;
    const video = await Video.findById(videoId);
    const user = await User.findById(video.creator);
    const comments = await Comment.find({ videoId }).populate("author");
    if(user.id !== req.user.id){
        video.views++;
        video.save();
    }
    res.render('detail', { video, comments, user : user.email, pageTitle: "비디오상세페이지" });
};