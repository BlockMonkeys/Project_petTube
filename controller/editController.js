import Video from "../model/Video";

export const getVideoEdit = async(req, res)=> {
    const videoId = req.params.id;
    const video = await Video.find({ _id: videoId });
    res.render('edit', { video : video[0] });
}

export const postVideoEdit = async(req, res)=> {
    try{
        const videoId = req.params.id;
        const title = req.body.title;
        const description = req.body.description;
        await Video.findOneAndUpdate({ _id: videoId }, {title, description});
        res.redirect(`/video/${videoId}`);
    }catch(error){
        res.status(400);
        res.render('404');
    }
}