import React from 'react';
import SignIn from '../../containers/Sign-in/SignIn';
import classes from './LoginPage.module.scss';

const { loginLayout } = classes;

const Login = (props) => {
    return (
        <div className={loginLayout}>
            <SignIn />
        </div>
    );
};

export default Login;