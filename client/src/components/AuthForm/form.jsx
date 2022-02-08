import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ManLaptop from "../../assets/form-background/man-laptop.jpg";
import validator from "validator";
import { useDispatch } from "react-redux";
import { userSignUp, userSignIn } from "../../store/actions/user";

//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const AuthForm = (props) => {

    const [ userData, setUserData ] = useState({
        email: "",
        password: "",
        confPassword: ""        
    })
    const navigate = useNavigate();

    console.log(props)
    //display props
    const confPassDisplay = props.confPassDisplay;
    const forgPassDisplay = props.forgPassDisplay;

    //password
    const [passowrdType, setPasswordType] = useState("password");
    const [showPassword, setShowPassword] = useState(false);

    //confirm password
    const [confPassType, setConfPassType] = useState("password");
    const [showConfPass, setShowConfPass] = useState(false);

    //for password
    function ShowPassword() {
        setShowPassword(true);
        setPasswordType("text");
    }
    function HidePassword() {
        setShowPassword(false);
        setPasswordType("password");
    }

    //for confirm password
    function ShowConfPassword() {
        setShowConfPass(true);
        setConfPassType("text");
    }
    function HideConfPassword() {
        setShowConfPass(false);
        setConfPassType("password");
    }

    const dispatch = useDispatch();
    //user Submit
    function userSubmit(e) {
        e.preventDefault();
        if(validator.isEmail(userData.email) && props.formHeading === 'Signup'){
            if((userData.password).length>5 && (userData.confPassword).length>5) {
                dispatch(userSignUp(userData));
                console.log("Emial valid signUp successful");
                navigate("/");
            } else {
                console.log("password too short")
            }
        }else if (validator.isEmail(userData.email) && props.formHeading === 'Login') { 
            if((userData.password).length !== 0) {
                dispatch(userSignIn(userData));
                console.log("Emial valid logIn successful");
                navigate("/");
            } else {
                console.log("Type password")
            }
        } else {
            console.log("Emial Invalid");
        }
    }

    return  <Box style={{backgroundImage: `url(${ManLaptop})`}}>
        <FormBox>
            <Heading>{props.formHeading}</Heading>
            <Form methode="Post" path={props.postPath} >
                {/* userInput */}
                <UserInput 
                  name="email" 
                  value={userData.email} 
                  type={props.userType} 
                  autoComplete="off" 
                  placeholder={props.userPlaceholder} 
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
                {/* password */}
                <PasswordWraper>
                    <PasswordInput 
                      value={userData.password} 
                      name="password" 
                      type={passowrdType} 
                      autoComplete="off" 
                      placeholder={props.passwordPlaceholder} 
                      onChange={(e) => setUserData({...userData, password: e.target.value})}
                    />
                    {showPassword 
                    ? <StikedEyeIcon onClick={HidePassword}/> 
                    : <EyeIcon onClick={ShowPassword} /> }
                </PasswordWraper>
                {/* confirm password  */}
                <PasswordWraper style={{display: confPassDisplay}}>
                    <PasswordInput 
                      value={userData.password} 
                      name="confirmPassword" 
                      type={confPassType} 
                      placeholder={props.confPassPlaceholder} 
                      onChange={(e) => setUserData({...userData, confPassword: e.target.value})}
                    />
                    {showConfPass 
                    ? <StikedEyeIcon onClick={HideConfPassword}/> 
                    : <EyeIcon onClick={ShowConfPassword} /> }
                </PasswordWraper>
            </Form>
            {/* forgot Password */}
            <ForgetPassword style={{display: forgPassDisplay}} to="/log-in/forgot-passowrd" >Forget Password?</ForgetPassword>
            {/* submit button */}
            <Button onClick={userSubmit}>
                {props.formButton}
            </Button>
        </FormBox>
    </Box>
}

export default AuthForm;

const Box = styled.div`
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    display: grid;
    place-items: center;
    width: 100%;
    height: calc(100vh - 80px);
    place-items: center;
    object-fit: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 150% 44%;
`;

const FormBox = styled.div`
    display: flex;
    /* max-width: 400px; */
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    padding: 5rem 5rem;
    background: transparent;
    background: rgba(0,0,0,0.4);
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
    font-size: 1rem;
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
    font-size: 1rem;
    outline: none;
    color: #080808;
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
    color: #fff;
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
    font-size: 1rem;
    letter-spacing: 1px;
    border: 2px solid dodgerblue;

    :hover {
        border-radius: 20px;
        border: 2px solid #E60965;
        transition: 0.3s;
        cursor: pointer;
    }
`;