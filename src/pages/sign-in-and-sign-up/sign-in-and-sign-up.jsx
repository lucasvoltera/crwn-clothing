import React from "react";
import './sign-in-and-sign-up.scss';
import SignIn from "../../components/sign-in/sign-in";

// using a functional component we dont want any state
const SignInAndSignUpPage = () => {
    return (
        <div className = 'sign-in-and-sign-up'>
            <SignIn />
        </div>
    );

}

export default SignInAndSignUpPage;