import React from 'react'; 
import style from './Posts.module.css';
// import props from

const Posts = (props) => {
    return(
        <div className={style.item}>
            <img src="https://i.imgflip.com/38iqvl.png"></img>
            {props.message}
            <div>
                <span>Like {props.likes}</span>
            </div>
            <div>
                <span>Comment</span>
            </div>
        </div>
);
}

export default Posts;