import React from 'react'; 
import style from './Content.module.css';
import ContentInfo from './ContentInfo/ContentInfo';
import MyPosts from './MyPosts/Myposts';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Components = (props) => {


    return(
        <div>
            <ContentInfo />
            <MyPostsConteiner store={props.store} 
                        // postsData={props.contentPage.postsData}
                        // newPostText={props.contentPage.newPostText}
                        // newMessageText={props.dialogsPage.newMessageText}
                        // dispatch={props.dispatch}
                        />
                        
        </div>
    );
}

export default Components;