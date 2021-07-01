import { React, useState } from 'react';
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
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} className={loginCommon}>
                <label>Email</label>
                <input name="email" value={form.email} type="email" onChange={handleChange} required />
                <label>Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" required />
                <input type="submit" value="submit"></input>
            </form>
        </div>
    );
};
        
export default SignIn;