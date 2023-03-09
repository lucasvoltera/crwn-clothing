import React from "react";
import './sign-in.scss';
import FormInput from "../form-input/form-input";
import CustomButtom from "../custom-buttom/custom-button";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (event) => {
        // prevent the default submit action from firing
        event.preventDefault();

        this.setState({email: '', password: ''})
    }


    handleChange = (event) => {
        const {value, name} = event.target;
        // it will dinamically change the state of whathever we are changing
        this.setState({ [name]: value});
    }

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

                <form onSubmit= {this.handleSubmit}>
                    <FormInput name="email"
                               type="email"
                               value={this.state.email} 
                               required
                               label="email"
                               handleChange = {this.handleChange}/>

                    <FormInput name="password"
                               type="password" 
                               value={this.state.password} 
                               required
                               label="password"
                               handleChange = {this.handleChange}/>

                    <CustomButtom type="submit"> Sign in </CustomButtom>

                </form>

            </div>
        );
    }
}

export default SignIn;