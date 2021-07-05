import React from 'react';
// import { googleLogo } from '../../assets';
import classes from './ThirdPartyLoginButton.module.scss';

const { ThirdParty } = classes;

const ThirdPartyLoginButton = ({ title, image, ...otherProps }) => {
    return (
        <button className={ThirdParty} {...otherProps}>
                <img src={image} alt="logo" />
                <span>Sign in with {title} </span>           
        </button>
    );
};

export default ThirdPartyLoginButton;