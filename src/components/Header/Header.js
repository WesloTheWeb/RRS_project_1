import React from 'react';
import { mascot } from '../../assets';
import classes from './Header.module.scss';

const { header, logoContainer, mascotImg, navigation, storeFront } = classes;

const Header = (props) => {
    return (
        <>
        <header className={header}>
            <section className={logoContainer}>
                <h1 className={storeFront}>Shella Fresh</h1>
                <img src={mascot} className={mascotImg} alt="squid with swag" />
            </section>
            <nav>
                <ul className={navigation}>
                    <li>Shop</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default Header;