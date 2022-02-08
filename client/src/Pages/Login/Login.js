import AuthForm from "../../components/AuthForm/form.jsx";

const Login = () => {
    return  (  
        <AuthForm
            postPath="http://localhost:5000/auth/signin"
            formHeading="Login" 
            userType="text"
            userPlaceholder="Enter your email" 
            passwordPlaceholder="Enter Password" 
            confPassPlaceholder=""
            confPassDisplay="none"
            forgPassDisplay="block"
            formButton="Login"
        />
    )
}

export default Login;
