import { React, useState } from 'react';
import classes from '../../components/LoginPage/LoginPage.module.scss';

const { terminalUIBlock, loginCommon } = classes;

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default from happening.
        setEmail(email = '');
        setPassword(password = '');
    }

    // const handleChange = (e) => {
    //     const { value, name } = e.target;
    //     setEmail({name: value});
    //     setPassword({password: value});
    // }

    return (
        <div className={terminalUIBlock}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form className={loginCommon}>
                <label>Email</label>
                <input name="email" value={email} type="email" required />
                <label>Password</label>
                <input name="password" value={password} type="password" required />
                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
};
        
export default SignIn;