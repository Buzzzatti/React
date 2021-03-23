import React from 'react'; 
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';


// const DialogsContainer = () => {

//     return(
//         <StoreContext.Consumer>
//         {
//             (store) => {
//                 let state = store.getState().dialogsPage;

//                 let onSendMessageClick = () => {
//                     store.dispatch(sendMessageCreater());
//                 }

//                 let onNewMessageChange = (body) => {
//                     store.dispatch(updateNewMessageBodyCreater(body));
//                 }

//             return    <Dialogs updateNewMessageBody={onNewMessageChange} 
//                     SendMessage={onSendMessageClick}
//                     dialogsPage={store.getState().dialogsPage} />;
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: () => {
            dispatch(sendMessageCreater());
        },
        SendMessage: (body) => {
            dispatch(updateNewMessageBodyCreater(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;