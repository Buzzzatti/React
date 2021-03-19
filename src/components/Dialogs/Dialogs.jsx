import React from 'react'; 
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import style from'./Dialogs.module.css';
import Message from './Message/Message';
import {addMessageActionCreater, updateNewMessageTextActionCreater} from '../../redux/state'





const Dialogs = (props) => {

    let dialogsElements = props.state.dialogsData
    .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.state.messagesData
    .map( (messages) => <Message message={messages.message} id={messages.id}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreater());
    }

    let onNewMessage = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreater(text);
        props.dispatch(action);
        
    }


    return(
        <div className={style.dialogs}>
            <div div className={style.dialogItems}>
                {
                    dialogsElements
                }
            </div>
            <div className="messageItems">
                {
                    messagesElements
                }
                <textarea onChange={onNewMessage} ref={newMessageElement}></textarea>
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    );
}

export default Dialogs;