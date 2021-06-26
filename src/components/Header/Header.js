import React from 'react';
import { Link } from "react-router-dom";
import Swag from '../../containers/Swag/Swag';
import classes from './Header.module.scss';

const { header, logoContainer, navigation, storeFront } = classes;

const Header = (props) => {
    return (
        <>
        <header className={header}>
            <section className={logoContainer}>
                <h1 className={storeFront}>
                    <Link to="/">Shella Fresh</Link></h1>
                <Swag />
            </section>
            <nav>
                <ul className={navigation}>
                    <li><Link to="/shop">Shop</Link></li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default Header;