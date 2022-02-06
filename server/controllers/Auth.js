import { User } from "../config/db.js";

//user registration
const UserRegis = (req, res) => {
    const { email, confPassword } = req.body;
    console.log(email, confPassword);

    const newUser = new User({
        email: email,
        password: confPassword
    })

    User.save()
        .then(response => res.status(200).send("Registration Successful."))
        .catch(err => res.status(404).send("Registration failed!", err));
}

//user login
const UserLogin = (req, res) => {
    const { userName, password } = req.body;
}

export {
    UserRegis,
    UserLogin
}