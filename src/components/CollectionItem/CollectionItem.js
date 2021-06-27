import React from 'react';
import classes from './CollectionItem.module.scss';

const { collectionItem } = classes;

const CollectionItem = ({ item }) => {
    return (
        <div className={collectionItem} key={item.id}>
            <img src={item.imageUrl} alt="item" />
            <div className="item-price-container">
                <label>{item.name}</label>
                <span>${item.price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;