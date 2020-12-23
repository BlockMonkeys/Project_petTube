import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", ()=> console.log(`✅ DB is Connected!`));
db.on("error", (error)=> console.log(`❌ DB Problem : ${error}`));