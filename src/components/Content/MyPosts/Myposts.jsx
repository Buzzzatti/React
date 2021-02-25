import React from 'react'; 
import style from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {

    let postsData = [
        {id: 1, like: 19, message: 'First post words'},
        {id: 2, like: 3, message: 'Second post words'}
    ]

    return(
        <div className={style.postsBlock}>
            <h2>My Posts</h2>
            <div class={style.newPost}>
                New posts
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Clean</button>
                </div>                
            </div>
            <div className={style.posts}>
                <Posts message={postsData[0].message} likes={postsData[0].like} id={postsData[0].id}/>
                <Posts message={postsData[1].message} likes={postsData[1].like} id={postsData[1].id}/>
            </div>
        </div>
    );
}

export default MyPosts;