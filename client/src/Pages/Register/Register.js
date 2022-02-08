import Form from "../../components/AuthForm/form";

const SignUp = () => {
    return (
        <Form 
            postPath="http://localhost:5000/auth/signup"
            formHeading="Signup" 
            userType="text"
            userPlaceholder="Enter your email" 
            passwordPlaceholder="Enter Password" 
            confPassPlaceholder="Confirm Password"
            confPassDisplay="block"
            forgPassDisplay="none"
            formButton="Signup"
        />
    )
}

export default SignUp;