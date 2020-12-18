import User from "../model/User";
import passport from "passport";
import routes from "../routes";
import Video from "../model/Video";

// 로그인/아웃
export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "로그인" });
};

export const postLogin = passport.authenticate("local", {
    failureRedirect: "/",
    failureFlash : "아이디 혹은 패스워드가 다릅니다.",
    successRedirect: "/home",
});

export const logout = (req, res) => {
    req.logout();
    res.redirect(routes.LOGIN);
};

//회원가입
export const getRegister = (req, res) => {
    res.render("register", { pageTitle: "회원가입" });
};

export const postRegister = async(req, res, next) => {
    const userId = req.body.email;
    const userPassword = req.body.password;
    const userPassword2 = req.body.password2;
    if(userPassword !== userPassword2){
        req.flash("error", `Password와 Verify Password가 다릅니다 !`);
        res.status(400);
        res.render("register");
    } else {
        try{
            const user = await User({
                email:userId,
            });
            await User.register(user, userPassword);
            next();
        } catch(error) {
            req.flash("error", `아이디가 중복됩니다 !`);
            res.render("register");
        }
    }
};


//홈
export const getHome = async(req, res) => {
    const video = await Video.find({});
    res.render("home", { video, pageTitle: "홈페이지" });
};