import React from 'react'; 
import Preloader from '../../common/preloader/Preloader';
import style from '../Content.module.css';

const ContentInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return(
        <div>
            <div className={style.content}>
                <img src='https://imgix.bustle.com/inverse/52/45/4d/29/e93b/414b/8782/0ad52c6f1d69/2f0png.png?w=2000&h=640&fit=crop&crop=faces&auto=format%2Ccompress&blend=000000&blendAlpha=45&blendMode=normal'></img>
            </div>
            <div className={style.description}>
                <img src={props.profile.photos.large}/>
                Avatar description
                Social Netvorks:{props.profile.contacts.facebook}
            </div>
        </div>
    );
}

export default ContentInfo;