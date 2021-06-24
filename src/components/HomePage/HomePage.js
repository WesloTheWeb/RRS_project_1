import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
// import Header from '../Header/Header';
import classes from './HomePage.module.scss';

const { homepage, directoryMenu } = classes;

const HomePage = (props) => {

    const inventory = [
        {
            title: "Hats",
            imageClass: 'hatsCover',
            id: 0,
            cta: "Shop Now",
        },
        {
            title: "Jackets",
            imageClass: 'jacketsCover',
            id: 1,
            cta: "Shop Now",
        },
        {
            title: "Sneakers",
            imageClass: 'sneakersCover',
            id: 2,
            cta: "Shop Now",
        },
        {
            title: "Womens",
            imageClass: 'womensCover',
            id: 3,
            cta: "Shop Now",
        },
        {
            title: "Mens",
            imageClass: 'mensCover',
            id: 4,
            cta: "Shop Now",
        },
    ]
    return (
        <>
            <section className={homepage}>
                <div className={directoryMenu}>
                    {inventory.map(({ title, id, cta, imageUrl, imageClass }) => {
                        return <MenuItem title={title} key={id} cta={cta} imageUrl={imageUrl} imageClass={imageClass} />
                    })}
                </div>
            </section>
        </>
    );
};

export default HomePage;