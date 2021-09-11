import { React, useState } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormInput from '../../components/FormInput/FormInput';
import classes from './SignUp.module.scss';

const { signUpSection, signUpContainer } = classes;

const SignUp = ({ }) => {

    const [userInformation, setUserInformation] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleSubmit = async event => {
        event.preventDefault();
        // Manually create our auth from the app.js file:
        if (password != confirmPassword) {
            console.log(`password don't match`);
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });
            // Clear up our form when we finish:
            setUserInformation({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = event => {
        const { name, value } = event.target;
        setUserInformation({ [name]: value });
    }

    const { displayName, email, password, confirmPassword } = userInformation;

    return (
        <section className={signUpSection}>
            <h2>I do not have an account.</h2>
            <span>Sign up with your email and password.</span>
            <form className={signUpContainer} onSubmit={handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label="Display Name"
                    required
                />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label="Email"
                    required
                />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label="Password"
                    required
                />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label="confirm Password"
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </section>
    );
};

export default SignUp;