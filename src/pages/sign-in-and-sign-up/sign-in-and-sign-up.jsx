import React from "react";
import './sign-in-and-sign-up.scss';
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

// using a functional component we dont want any state
const SignInAndSignUpPage = () => {
    return (
        <div className = 'sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    );

}

export default SignInAndSignUpPage;


