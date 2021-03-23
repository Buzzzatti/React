import React from 'react'; 
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/content-reducer'
import MyPosts from './Myposts';
import {connect} from 'react-redux';



// const MyPostsConteiner = () => {

//     return(
//         <StoreContext.Consumer>
//         { 
//             (store) =>{
//                 let state = store.getState();

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreater());
//                 }
            
//                 let onPostChange = (text) => {
//                     let action = updateNewPostTextActionCreater(text);
//                     store.dispatch(action);
                    
//                 }

//                 return <MyPosts updateNewPostText={onPostChange} 
//                         addPost={addPost} 
//                         postsData={state.contentPage.postsData} 
//                         newPostText={state.contentPage.newPostText}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return{
        postsData: state.contentPage.postsData,
        newPostText: state.contentPage.newPostText
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: () => {
            dispatch(addPostActionCreater());
        },
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreater(text);
            dispatch(action);
        }
    }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsConteiner;