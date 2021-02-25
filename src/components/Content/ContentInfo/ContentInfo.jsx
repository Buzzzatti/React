import React from 'react'; 
import style from '../Content.module.css';

const ContentInfo = () => {
    return(
        <div>
            <div className={style.content}>
                <img src='https://imgix.bustle.com/inverse/52/45/4d/29/e93b/414b/8782/0ad52c6f1d69/2f0png.png?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal'></img>
            </div>
            <div className={style.description}>
                Avatar description
            </div>
        </div>
    );
}

export default ContentInfo;