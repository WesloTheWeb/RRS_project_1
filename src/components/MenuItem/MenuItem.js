import React from 'react';
import classes from './MenuItem.module.css';

const {menuItem, title, subtitle} = classes;

const MenuItem = (props) => {
    return (
        <div className={menuItem}>
            <h1 className={title}>{props.title}</h1>
            <span className={subtitle}>{props.cta}</span>
        </div>
    );
};

export default MenuItem;