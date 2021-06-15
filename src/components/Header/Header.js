import React from 'react';
import { splatoons2, mascot } from '../../assets';
import classes from './Header.module.css';

const { header, logoContainer, mascotImg } = classes;

const Header = (props) => {
    return (
        <header className={header}>
            <section className={logoContainer}>
                <img src={splatoons2} alt="splatoons 2 logo" />
                <img src={mascot} className={mascotImg} alt="squid with swag" />
            </section>
        </header>
    );
};

export default Header;