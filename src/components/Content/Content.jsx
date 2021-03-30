import React from 'react'; 
import ContentInfo from './ContentInfo/ContentInfo';
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


const Components = (props) => {

    return(
        <div>
            <ContentInfo profile={props.profile}/>
            <MyPostsConteiner />
        </div>
    );
}

export default Components;