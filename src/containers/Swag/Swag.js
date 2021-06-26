import { React, useState } from 'react';
import { mascot } from '../../assets';

import classes from './Swag.module.scss';

const { bubbleBox, bubbleTriangle, mascotImg } = classes;

const Swag = (props) => {
    const [swag, setSwag] = useState("");

    const quotes = [
        `Welcome to Shella Fresh!`,
        `DAAANG, DUDE!, You're looking flyer than an Inkjet! Fresher than a mint farm! Check out these new sneaks I got! `
    ]

    const handleQuote = () => {
        setSwag(
            quotes.map((quote) => {
                return (
                    quote
                )
            })
        );
    }

    return (
        <>
            <img onClick={handleQuote} src={mascot} className={mascotImg} alt="squid with swag" />
            <div className={bubbleTriangle}></div>
            <div className={bubbleBox}>
                {swag}
            </div>
        </>
    );
};


export default Swag;