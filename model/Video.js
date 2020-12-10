import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    title:{
        type:String,
        max:15,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    fileUrl:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    creator:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

const model = mongoose.model("Video", VideoSchema);

export default model;