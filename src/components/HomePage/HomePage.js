import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
// import Header from '../Header/Header';
import classes from './HomePage.module.scss';

const { homepage, directoryMenu } = classes;

const HomePage = (props) => {

    const inventory = [
        {
            title: "Hats",
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 0,
            cta: "Shop Now",
        },
        {
            title: "Jackets",
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 1,
            cta: "Shop Now",
        },
        {
            title: "Sneakers",
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 2,
            cta: "Shop Now",
        },
        {
            title: "Womens",
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            id: 3,
            cta: "Shop Now",
        },
        {
            title: "Mens",
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            id: 4,
            cta: "Shop Now",
        },
    ]
    return (
        <>
            <section className={homepage}>
                <div className={directoryMenu}>
                    {inventory.map(({ title, id, cta, imageUrl, size }) => {
                        return <MenuItem title={title} key={id} cta={cta} imageUrl={imageUrl} />
                    })}
                </div>
            </section>
        </>
    );
};

export default HomePage;