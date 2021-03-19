import React from 'react'; 
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/content-reducer'
import MyPosts from './Myposts';



const MyPostsConteiner = (props) => {

    let addPost = () =>{
        props.store.dispatch(addPostActionCreater());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreater(text);
        props.store.dispatch(action);
        
    }


    return(<MyPosts NewPostText={onPostChange} addPost={addPost} postsData={props.postsData} />)
}

export default MyPostsConteiner;