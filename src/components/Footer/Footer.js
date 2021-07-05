import React from 'react';
import classes from './Footer.module.scss';

const {footerContainer} = classes;

const Footer = (props) => {
    return (
        <footer className={footerContainer}>
            <div>
                <p>Copyright &copy;2021</p>
            </div>
        </footer>
    );
};


export default Footer;