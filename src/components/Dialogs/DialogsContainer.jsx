import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import style from'./Dialogs.module.css';
import Message from './Message/Message';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let newMessageText =state.newMessageText;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreater());
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreater(body));
    }

    console.log(newMessageText);

    return(<Dialogs updateNewMessageBody={onNewMessageChange} 
                    SendMessage={onSendMessageClick}
                    dialogsPage={state} />);
}

export default DialogsContainer;