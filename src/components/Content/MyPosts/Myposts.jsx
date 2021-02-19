import React from 'react'; 
import style from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return(
        <div>
            Posts
            <div class={style.newPost}>
                New posts
                <textarea></textarea>
                <button>Add post</button>
                <button>Clean</button>
            </div>
            <div className={style.posts}>
                <Posts message='First post words' likes='12'/>
                <Posts message='Second post words' likes='3'/>
            </div>
        </div>
    );
}

export default MyPosts;