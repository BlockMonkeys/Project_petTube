import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        trim: true,
    }
});

UserSchema.plugin(passportLocalMongoose, { usernameField : "email" });
const model = mongoose.model('User', UserSchema);

export default model;