import React from 'react'; 
import style from './MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = (props) => {

    let postsElements = props.postsData 
    .map( (posts) => <Posts message={posts.message} likes={posts.like} id={posts.id}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return(
        <div className={style.postsBlock}>
            <h2>My Posts</h2>
            <div class={style.newPost}>
                New posts
                <div>
                    <textarea ref={newPostElement} ></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                    <button>Clean</button>
                </div>                
            </div>
            <div className={style.posts}>
                {
                    postsElements
                }

                {/* <Posts message={postsData[0].message} likes={postsData[0].like} id={postsData[0].id}/>
                <Posts message={postsData[1].message} likes={postsData[1].like} id={postsData[1].id}/> */}
            </div>
        </div>
    );
}

export default MyPosts;