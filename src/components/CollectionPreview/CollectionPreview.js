import React from 'react';
import classes from './CollectionPreview.module.scss';

const { collectionPreview, title, preview, clothing } = classes;

const CollectionPreview = ({ item }) => {
    return (
        <section className={collectionPreview}>
            <h1 className={title}>{item.title}</h1>
            <div className="divider">
                <div className={preview}>
                    {
                        item.items.filter((item, index) => index < 4)
                            .map((item) => {
                                return (
                                    <div className={clothing} key={item.id}>
                                        <img src={item.imageUrl} alt="item" />
                                        {item.name}
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
        </section>
    );
};

export default CollectionPreview;