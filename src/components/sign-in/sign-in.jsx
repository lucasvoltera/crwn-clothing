import React from "react";
import './sign-in.scss';
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/custom-button";
import { auth, signInWithGoogle } from "../../firebase/firebase-utils";


class SignIn extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        email: '',
        password: ''
      };
    }

    handleSubmit = async event => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({ email: '', password: '' });
      } catch (error) {
        console.log(error);
      }
    };

    handleChange = event => {
      const { value, name } = event.target;

      this.setState({ [name]: value });
    };

    render() {
        return(
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                {/* <form onSubmit= {this.handleSubmit}>
                    <input name="email" 
                           value={this.state.email} 
                           required
                           onChange = {this.handleChange}/>
                    <label>Email</label>

                    <input name="password" 
                           value={this.state.password} 
                           required
                           handleChange = {this.handleSubmit}/>
                    <label>Email</label>

                    <input type="submit" value="Submit Form" />

                </form> */}

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
    </div>
        );
    }
}

export default SignIn;