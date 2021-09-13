import { React, useState } from 'react';
import { mascot } from '../../assets';
import classes from './Swag.module.scss';

const { bubbleBox, bubbleTriangle, mascotImg } = classes;

const Swag = (props) => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    const quotes = [
        `Welcome to Shella Fresh!`,
        `DAAANG, DUDE!, You're looking flyer than an Inkjet! 
         Fresher than a mint farm! Check out these new sneaks I got! `,
        `Dece dece!`,
        `Pro-tip: Members save 20% monthly on the freshest deals. Join today! It's free 😎`,
        `Afterthoughts are still thoughts. They just come after other thoughts.`,
        `Constellations are just a hoax cooked up by Big Space. What do I see when I look up? Pinholes, maaan.`
    ]

    const setNewQuote = () => {
        setQuoteIndex(Math.floor(Math.random() * quotes.length));
    }

    return (
        <>
            <img onClick={setNewQuote} src={mascot} className={mascotImg} alt="squid with swag" />
            <div className={bubbleTriangle}></div>
            <div className={bubbleBox}>
                {quotes[quoteIndex]}
            </div>
        </>
    );
};

export default Swag;