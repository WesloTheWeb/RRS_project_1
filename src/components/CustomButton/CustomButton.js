import React from 'react';
import classes from './CustomButton.module.scss';

const { customButton } = classes;

// Trying something new with destructuring props via spread operator.
const CustomButton = ({children, ...otherProps}) => {
    return (
        <button className={customButton} {...otherProps}>
            {children} 
        </button>
    );
};

export default CustomButton;