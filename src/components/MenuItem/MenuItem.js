import React from 'react';
import '../../App.scss';
import classes from './MenuItem.module.scss';

const {menuItem, titleContainer, title, subtitle} = classes;

const MenuItem = (props) => {
    return (
        <div className={`${menuItem} ${props.imageClass}`}>
            <div className={titleContainer}>
            <h1 className={title}>{props.title}</h1>
            <span className={subtitle}>{props.cta}</span>
            </div>
        </div>
    );
};

export default MenuItem;