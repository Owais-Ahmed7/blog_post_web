import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";

//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// const props = ({
//     formHeading, 
//     userType, 
//     userPlaceholder, 
//     passowrdType, 
//     passwordPlaceholder,
//     confPassdisplay,
//     confPassPlaceholder,
//     forgetDisplay,
//     formButton
// })

const AuthForm = (props) => {

    console.log(props)
    //display props
    const confPassDisplay = props.confPassDisplay;
    const forgPassDisplay = props.forgPassDisplay;

    const [passowrdType, setPasswordType] = useState("password");
    const [showPassword, setShowPassword] = useState(false);

    function ShowPassword() {
        setShowPassword(true);
        setPasswordType("text");
    }

    function HidePassword() {
        setShowPassword(false);
        setPasswordType("password");
    }

    return  <Box>
        <FormBox>
            <Heading>{props.formHeading}</Heading>
            <Form>
                {/* userInput */}
                <UserInput type={props.userType} autoComplete="off" placeholder={props.userPlaceholder} />
                {/* password */}
                <PasswordWraper>
                    <PasswordInput type={passowrdType} autoComplete="off" placeholder={props.passwordPlaceholder} />
                    {showPassword 
                    ? <StikedEyeIcon onClick={HidePassword}/> 
                    : <EyeIcon onClick={ShowPassword} /> }
                </PasswordWraper>
                {/* confirm password  */}
                <PasswordWraper style={{display: confPassDisplay}}>
                    <PasswordInput type={passowrdType} placeholder={props.confPassPlaceholder} />
                    {showPassword 
                    ? <StikedEyeIcon onClick={HidePassword}/> 
                    : <EyeIcon onClick={ShowPassword} /> }
                </PasswordWraper>
            </Form>
            {/* forgot Password */}
            <ForgetPassword style={{display: forgPassDisplay}} to="/log-in/forgot-passowrd" >Forget Password?</ForgetPassword>
            {/* submit button */}
            <Button>
                {props.formButton}
            </Button>
        </FormBox>
    </Box>
}

export default AuthForm;

const Box = styled.div`
font-family: 'Montserrat', sans-serif;
    background: linear-gradient(128deg, dodgerblue, #E60965);
    display: grid;
    height: 87.5vh;
    place-items: center;
`;

const FormBox = styled.div`
    display: flex;
    /* max-width: 400px; */
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding: 5rem 5rem;
    background: #fff;
    border-radius: 3px;
    box-shadow: 2px 5px 10px grey;

    @media screen and (max-width: 500px) {
        padding: 5rem 2rem;
    }

    @media screen and (max-with: 300px) {
        padding: 5rem 1rem;
    }
`;

const Heading = styled.h1`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 30px;
    color: dodgerblue;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px !important;

    @media screen and (max-width: 400px) {
        width: 200px !important;
    }
`;

const UserInput = styled.input`
    margin-bottom: 1rem;
    border-style: none;
    border-bottom: 2px solid #E60965;
    padding: 10px 5px;
    width: 100%;
    outline: none;
    color: #080808;
    font-size: 0.9rem;
    background-color: #EEEEEE !important;

    :hover {
        outline: none;
        border-bottom: 2px solid dodgerblue;
    }

    @media screen and (max-width: 400px) {
        font-weight: 400;
    }
`;

const PasswordWraper = styled.div`
    position: relative;
    display: flex;

`;

//password visibility off
const EyeIcon = styled(VisibilityIcon)`
    position: absolute;
    right: 5%;
    top: 5%;

    :hover {
        cursor: pointer;
        color: #E60965;
    }
`;

//password visibility on
const StikedEyeIcon = styled(VisibilityOffIcon)`
    position: absolute;
    right: 5%;
    top: 5%;

    :hover {
        cursor: pointer;
        color: #E60965;
    }
`;

//password field
const PasswordInput = styled.input`
    margin-bottom: 1rem;
    border-style: none;
    border-bottom: 2px solid #E60965;
    padding: 7px 5px;
    width: 100%;
    outline: none;
    color: #fff;
    font-size: 0.9rem;
    background-color: #EEEEEE !important;

    :hover {
        outline: none;
        border-bottom: 2px solid dodgerblue;
    }

    @media screen and (max-width: 400px) {
        font-weight: 400;
    }
`;

//forget passowrd
const ForgetPassword = styled(Link)`
    text-align: center;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 20px;
    cursor: pointer;
    color: #080808;
    text-decoration-line: none;
    text-underline-position: none;

    :hover {
        opacity: 0.8;
    }
`;

//login button
const Button = styled.button`
    padding: 10px 5px;
    font-weight: bold;
    border-style: none;
    border-radius: 5px;
    border: 2px solid dodgerblue;

    :hover {
        border-radius: 20px;
        border: 2px solid #E60965;
        transition: 0.3s;
        cursor: pointer;
    }
`;