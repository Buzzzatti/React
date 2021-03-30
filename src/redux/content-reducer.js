const ADD_POST = 'ADD_POST'; 

const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postsData: [
        {id: 1, like: 19, message: 'First post words'},
        {id: 2, like: 3, message: 'Second post words'}
        ],
    newPostText: 'Vvedite text',
    content:null
};

const contentReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                id: 5,
                message: state.newPostText,
                like:0
            };
            return {
                ...state,
                postsData: [...state.postsData],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:{
            return { ...state, profile: action.profile }
        };
            default: 
                return state;
        
    }
}


export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile})
export const addPostActionCreater = () => ({type: ADD_POST})
export const updateNewPostTextActionCreater = (text) => {
    return { type:UPDATE_NEW_POST_TEXT, newText: text}
    
}

export default contentReducer;