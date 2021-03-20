import React from 'react'; 
import style from './Mygit osts.module.css';
import Posts from './Posts/Posts';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/content-reducer'



const MyPostsConteiner = (props) => {

    let postsElements = props.postsData 
    .map( (posts) => <Posts message={posts.message} likes={posts.like} id={posts.id}/> )

    let newPostElement = React.createRef();

    let addPost = () =>{
        props.dispatch(addPostActionCreater());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreater(text);
        props.dispatch(action);
        
    }


    return(
        <div className={style.postsBlock}>
            <h2>My Posts</h2>
            <div class={style.newPost}>
                New posts
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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

export default MyPostsConteiner;