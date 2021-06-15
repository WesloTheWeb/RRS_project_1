import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import classes from './HomePage.module.css';

const { homepage, directoryMenu } = classes;

const HomePage = (props) => {

    const inventory = [
        {
            title: "Hats",
            id: 0,
            cta: "Shop Now"
        },
        {
            title: "Jackets",
            id: 1,
            cta: "Shop Now"
        },
        {
            title: "Sneakers",
            id: 2,
            cta: "Shop Now"
        },
        {
            title: "Womens",
            id: 3,
            cta: "Shop Now"
        },
        {
            title: "Mens",
            id: 4,
            cta: "Shop Now"
        },
    ]

    return (
        <section className={homepage}>
            <div className={directoryMenu}>
                {inventory.map((item, id) => {
                    return <MenuItem title={item.title} key={item.id} cta={item.cta} />
                })}
            </div>
        </section>
    );
};

export default HomePage;