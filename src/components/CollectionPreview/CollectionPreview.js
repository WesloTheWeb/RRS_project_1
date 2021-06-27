import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem';
import classes from './CollectionPreview.module.scss';

const { collectionPreviewSet, title, preview } = classes;

const CollectionPreview = ({ item }) => {
    return (
        <section className={collectionPreviewSet}>
            <h1 className={title}>{item.title}</h1>
            <div className={preview}>
                {
                    item.items.filter((item, index) => index < 4)
                        .map((item) => {
                            return (
                                <CollectionItem key={item.id}
                                    item={item}
                                    name={item.name}
                                    price={item.price}
                                    imageUrl={item.imageUrl}
                                />
                            )
                        })
                }
            </div>
        </section>
    );
};

export default CollectionPreview;