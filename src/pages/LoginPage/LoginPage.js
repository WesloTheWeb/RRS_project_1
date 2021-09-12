import React from 'react';
import SignIn from '../../containers/Sign-in/SignIn';
import SignUp from '../../containers/Sign-up/SignUp';
import TwitterFeed from '../../containers/TwitterFeed/TwitterFeed';
import classes from './LoginPage.module.scss';

const { loginLayout } = classes;

const Login = (props) => {
    return (
        <div className={loginLayout}>
            <SignIn />
            <SignUp />
            <TwitterFeed />
        </div>
    );
};

export default Login;