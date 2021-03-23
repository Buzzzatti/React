import React from 'react'; 
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/content-reducer'
import StoreContext from '../../../StoreContext';
import MyPosts from './Myposts';



const MyPostsConteiner = () => {

    return(
        <StoreContext.Consumer>
        { 
            (store) =>{
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreater());
                }
            
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreater(text);
                    store.dispatch(action);
                    
                }

                return <MyPosts updateNewPostText={onPostChange} 
                        addPost={addPost} 
                        postsData={state.contentPage.postsData} 
                        newPostText={state.contentPage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsConteiner;