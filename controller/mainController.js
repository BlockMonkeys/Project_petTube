import User from "../model/User";
import passport from "passport";
import routes from "../routes";
import Video from "../model/Video";

// 로그인/아웃
export const getLogin = (req, res) => {
    res.render("login");
};

export const postLogin = passport.authenticate("local", {
    failureRedirect: "/",
    successRedirect: "/home",
});

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.LOGIN);
};

//회원가입
export const getRegister = (req, res) => {
    res.render("register");
};

export const postRegister = async(req, res, next) => {
    const userId = req.body.email;
    const userPassword = req.body.password;
    const userPassword2 = req.body.password2;
    if(userPassword !== userPassword2){
        res.status(400);
        res.render("register");
    } else {
        try{
            const user = await User({
                email:userId,
            });
            await User.register(user, userPassword);
            next();
        }catch(error){
            console.log(error);
        }
    }
};


//홈
export const getHome = async(req, res) => {
    const video = await Video.find({});
    res.render("home", { video });
};