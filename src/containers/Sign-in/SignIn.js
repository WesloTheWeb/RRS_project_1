import { React, useState } from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import classes from '../../components/LoginPage/LoginPage.module.scss';

const { terminalUIBlock, loginCommon } = classes;

const SignIn = (props) => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(form.email);
        console.log(form.password);
        setForm({
            email: '',
            password: '',
          });
    }

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
            </form>
        </div>
    );
};

// TO-DO: Add in RSS Feed of Twitter that searches for #ShellaFresh
        
export default SignIn;