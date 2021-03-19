const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

const SEND_MESSAGE = 'SEND_MESSAGE';

let innitialState = {
    dialogsData: [
        {id: 1, name: 'Юля'},
        {id: 2, name: 'Артур'},
        {id: 3, name: 'Карина'},
        {id: 4, name: 'Никита'},
        {id: 5, name: 'Ильмира'}
        ],
    messagesData: [ 
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What the Fuck '}
        ],
    newMessageText: ""
};

const dialogsReducer = (state = innitialState, action) => {
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messagesData.push({id: 4, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreater = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreater = (body) => 
    ({ type:UPDATE_NEW_MESSAGE_BODY, body: body})
    

export default dialogsReducer;