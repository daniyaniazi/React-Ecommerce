import React from "react";
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component'
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPasword: ''
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        // console.log('submit : ', this.state)
        const { displayName, email, password, confirmPasword } = this.state;

        if (password !== confirmPasword) {
            alert(`passowrd didn't match`)
            return
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPasword: ''
            })
        }
        catch (error) {
            console.log(error)
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        })
        // console.log(this.state)
    }



    render() {
        const { displayName, email, password, confirmPasword } = this.state;
        return (
            <div className='sign-up'>
                <h2>
                    I do not have an account
</h2><span>
                    Sign Up with your email or password
</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type="text" value={displayName}
                        onChange={this.handleChange} name="displayName" id="displayName"
                        label='Display Name'
                        required />

                    <FormInput type="email" value={email}
                        onChange={this.handleChange} name="email" id="email"
                        label='Email'
                        required />

                    <FormInput type="password" value={password}
                        onChange={this.handleChange} name="password" id="password"
                        label='Password'
                        required />

                    <FormInput type="password" value={confirmPasword}
                        onChange={this.handleChange} name="confirmPasword" id="confirmPasword"
                        label='Confirm Pasword'
                        required />

                    <CustomButton type="submit"> Sign Up </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;