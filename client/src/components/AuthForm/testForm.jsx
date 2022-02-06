import styled from "styled-components";
import ManLaptop from "../../assets/form-background/man-laptop.jpg";
import "./form.css";



const AuthForm = () => {
    return <FormWrapper style={{backgroundImage: `url(${ManLaptop})`}}>
        <Form>
            <FormHeading>Login</FormHeading>
            <div className="input-group-wrap">
                <input type="text" />
                <label>UserName</label>
            </div>
            <div className="input-group-wrap">
                <input type="password" />
                <label>Password</label>
            </div>
            <SubmitButton>Login</SubmitButton>
            <ForgPassword>Forgot password?</ForgPassword>
        </Form>
    </FormWrapper>
}

export default AuthForm

const FormWrapper = styled.div`
    /* background: linear-gradient(128deg, dodgerblue, #E60965); */
    background: transparent;
    width: 100% !important;
    height: calc(100vh - 80px);
    width: 100%;
    display: grid;
    place-items: center;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 150% 44%;
`;

const Form = styled.form`
    position: relative;
    border: 5px solid red;
    padding: 5rem 5rem;
    width: 100%;
    max-width: 380px;
    background: rgba(0,0,0,0.4);
    border-radius: 10px;
    box-shadow: 0 3px 5px #5782bb;
`;

const FormHeading = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 1px;
    color: #ff652f;
`;

const SubmitButton = styled.button``;
const ForgPassword = styled.a``;