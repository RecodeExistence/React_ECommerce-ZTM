import React from 'react';

import FormInput from '../form-input/form-input.component'; 
import CustomButton from '../custom-button/custom-button.component'; 

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();
        
        this.state = {
            email: '',
            password: ''  
        }
    }

    handleSubmit = async event => {
        const { email, password} = this.state
        event.preventDefault();
        
        try {
            await auth.signInWithEmailAndPassword(email, password); 
                this.setState(
                    { 
                        email: '', 
                        password: '' 
                    }); 
            } catch(err) {
                console.log(`Error code: ${err.code}, Message: ${err.message}`); 
            }
        }

    handleChange = event => {
        const { name, value } = event.target; 
        
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in using your email and password</span>

                <form method="POST" onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" autoComplete="off"/>
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password"/>

                    <div className="button">
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign In With Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn; 