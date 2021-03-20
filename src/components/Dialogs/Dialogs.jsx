import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogItem';
import style from'./Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData
    .map( (dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = state.messagesData
    .map( (messages) => <Message message={messages.message} id={messages.id}/>)

    let newMessageText =state.newMessageText;
    
    let onSendMessageClick = () => {
        props.SendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value; 
        props.updateNewMessageBody(body);
    }

    console.log(newMessageText);

    return(
        <div className={style.dialogs}>
            <div div className={style.dialogItems}>
                {dialogsElements}
            </div>
            <div className="messageItems">
                <div>{ messagesElements }</div>
                <div>
                    <div>
                        <textarea value={newMessageText || ''} onChange={onNewMessageChange} placeholder='Vvedite Soobshenie'></textarea>
                    </div>
                    <div>
                        <button onClick= {onSendMessageClick}>Send</button>
                    </div>
                </div>
                
                {/* <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/> */}
            </div>
        </div>
    );
}

export default Dialogs;