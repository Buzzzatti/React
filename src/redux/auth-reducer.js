import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'; 

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data,
                isAuth: true
            }
        default: 
            return state;
    }
}

export const setAuthUserData = (userid, email, login) => ({type: SET_USER_DATA, data:{userid, email, login}})
export const getAuthUserData = () => (dispatch) =>{
    authAPI.me()
    .then(Response => {
        if (Response.data.resultCode === 0 ) {
            let {id, login, email} = Response.data.login;
            dispatch(setAuthUserData(id, login, email));
        }
    });
}

export default authReducer;