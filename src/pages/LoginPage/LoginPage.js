import React from 'react';
import SignIn from '../../containers/Sign-in/SignIn';
import SignUp from '../../containers/Sign-up/SignUp';
import classes from './LoginPage.module.scss';

const { loginLayout } = classes;

const Login = (props) => {
    return (
        <div className={loginLayout}>
            <SignIn />
            <SignUp />
        </div>
    );
};

export default Login;