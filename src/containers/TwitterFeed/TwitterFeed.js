import React from 'react';
import classes from './TwitterFeed.module.scss';

const { tweet } = classes;

const TwitterFeed = ({ }) => {
    return (
        <section >
            <a href="https://twitter.com/intent/tweet?button_hashtag=ShellaFresh&ref_src=twsrc%5Etfw"
                className={tweet} data-show-count="false">Tweet I'm staying fresh 😎 @ #ShellaFresh</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
            <div className={tweet}>
                <a href="https://twitter.com/intent/tweet?button_hashtag=ShellaFresh&ref_src=twsrc%5Etfw"
                    className="twitter-hashtag-button" data-show-count="false">Tweet #ShellaFresh</a>
            </div>
        </section>
    );
};

export default TwitterFeed;