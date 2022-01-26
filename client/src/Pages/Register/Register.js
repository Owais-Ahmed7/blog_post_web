import Form from "../../components/AuthForm/form";

const SignUp = () => {
    return (
        <Form 
            formHeading="Signup" 
            userType="text"
            userPlaceholder="Enter your name" 
            passwordPlaceholder="Enter Password" 
            confPassPlaceholder="Confirm Password"
            confPassDisplay="block"
            forgPassDisplay="none"
            formButton="Signup"
        />
    )
}

export default SignUp;