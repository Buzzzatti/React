import React from 'react'; 
import style from './Posts.module.css';

const Posts = () => {
    return(
        <div className={style.item}>
            Post1
            <img src="https://i.imgflip.com/38iqvl.png"></img>
            <div>
                <span>Like</span>
            </div>
            <div>
                <span>Comment</span>
            </div>
        </div>
);
}

export default Posts;