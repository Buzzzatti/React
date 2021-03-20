import React from 'react'; 
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/content-reducer'
import MyPosts from './Myposts';



const MyPostsConteiner = (props) => {

    let state = props.store.getState();

    let addPost = () =>{
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
        
    }


    return(<MyPosts updateNewPostText={onPostChange} addPost={addPost} 
                    postsData={state.contentPage.postsData} 
                    newPostText={state.contentPage.newPostText}/>)
}

export default MyPostsConteiner