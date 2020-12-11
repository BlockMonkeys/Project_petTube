import Video from "../model/Video";
import User from "../model/User";

export const videoDetail = async(req, res)=> {
    const videoId = req.params.id;
    const video = await Video.findById(videoId);
    const user = await User.findById(video.creator);
    video.views++;
    video.save();
    res.render('detail', { video, user : user.email, pageTitle: "비디오상세페이지" });
};