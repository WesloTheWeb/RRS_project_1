import { React, useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import ThirdPartyLoginButton from '../../components/ThirdPartyLoginButton/ThirdPartyLoginButton';
import { googleLogo } from '../../assets';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import classes from '../../pages/LoginPage/LoginPage.module.scss';

const { terminalUIBlock, loginCommon, thirdPartyContainer } = classes;

const SignIn = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Destructuring is key here to pass the data along from our state.
        const { email, password } = form;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setForm({
                email: '',
                password: '',
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    return (
        <div className={terminalUIBlock}>
            <h2>I already have an account.</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit} className={loginCommon}>
                <label htmlFor="email">Email</label>
                <input name="email" id="email" value={form.email} type="email" onChange={handleChange} required />
                <label htmlFor="password">Password</label>
                <input name="password" id="password" value={form.password} onChange={handleChange} type="password" required />
                <CustomButton>Sign in</CustomButton>
                <div className={thirdPartyContainer}>
                    <p>OR</p>
                    <ThirdPartyLoginButton type="button" title="Google" image={googleLogo} onClick={signInWithGoogle}></ThirdPartyLoginButton>
                </div>

            </form>
        </div>
    );
};

// TO-DO: Add in RSS Feed of Twitter that searches for #ShellaFresh

export default SignIn;