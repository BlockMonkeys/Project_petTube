import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    body: {
        type: String, required:true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User"
    },
    createdAt: {
        type: Date, 
        default: Date.now(),
    },
    videoId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"Video",
    }
})

const model = mongoose.model("Comment", CommentSchema);
export default model;