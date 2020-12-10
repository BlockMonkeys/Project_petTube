import Video from "../model/Video";

export const deleteProcess = async(req, res) => {
    try{
        const videoId = req.params.id;
        await Video.findOneAndRemove({ _id: videoId });
        res.redirect('/home');
    } catch(error) {
        res.status(400);
        res.render('404');
    }
}