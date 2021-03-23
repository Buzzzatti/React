import React from 'react'; 
import { sendMessageCreater, updateNewMessageBodyCreater } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {

    return(
        <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogsPage;

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreater());
                }

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreater(body));
                }

            return    <Dialogs updateNewMessageBody={onNewMessageChange} 
                    SendMessage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage} />;
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;