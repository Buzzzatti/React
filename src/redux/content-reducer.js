const ADD_POST = 'ADD_POST'; 

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    postsData: [
        {id: 1, like: 19, message: 'First post words'},
        {id: 2, like: 3, message: 'Second post words'}
        ],
    newPostText: 'Vvedite text'
};

const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like:0
            };
            let stateCopy = {...state}
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT:{
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
            default: 
            return state;
        
    }
}

export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) => {
    return { type:UPDATE_NEW_POST_TEXT, newText: text}
    
}

export default contentReducer;