import AuthForm from "../../components/AuthForm/form";

const Login = () => {
    return  (  
        <AuthForm
            formHeading="Login" 
            userType="text"
            userPlaceholder="Enter your name" 
            passwordPlaceholder="Enter Password" 
            confPassPlaceholder="Confirm Password"
            confPassDisplay="none"
            forgPassDisplay="block"
            formButton="Login"
        />
    )
}

export default Login;
