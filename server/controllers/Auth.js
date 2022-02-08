import { User } from "../config/db.js";
import md5 from "md5";

//user registration
const UserRegis = (req, res) => {

        const email = req.body.email;
        const password = md5(req.body.password);
        console.log(email, password, "email password");
        const newUser = new User({
            email: email,
            password: password
        })
    
        newUser.save()
            .then(user => res.status(200).send(user.email))
            .catch(err => console.log("Registrantion failed!", err));

}

//user login
const UserLogin = (req, res) => {
    const email = req.body.email;
    const password = md5(req.body.password);

    User.findOne({email: email}, function (err, foundUser) {
        if(err) {
            console.log("No user with that email!")
        } else {
            if (foundUser.password === password) {
                res.status(200).send(foundUser.email);
                console.log("Login successfull.", foundUser.email);
            } else {
                res.status(404).send("Password incorrect.");
                console.log("Password incorrect.")
            }
        }
    })

}

export {
    UserRegis,
    UserLogin
}