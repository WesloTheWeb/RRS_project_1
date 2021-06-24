import React from 'react';
import classes from './MenuItem.module.scss';

const {menuItem, titleContainer, title, subtitle} = classes;

const MenuItem = (props) => {
    return (
        <div style={{backgroundImage: `url(${props.imageUrl})`}} className={menuItem}>
            <div className={titleContainer}>
            <h1 className={title}>{props.title}</h1>
            <span className={subtitle}>{props.cta}</span>
            </div>
        </div>
    );
};

export default MenuItem;