import React from 'react'; 
import { NavLink } from 'react-router-dom';
import style from'./Dialogs.module.css';
// import App.css from './../'

const DialogItem = (props) => {
    return(
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>{props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
        <div className="message">{props.message}</div>
    )
}



const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Юля'},
        {id: 2, name: 'Артур'},
        {id: 3, name: 'Карина'},
        {id: 4, name: 'Никита'},
        {id: 5, name: 'Ильмира'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'What the Fuck '}
    ]

    return(
        <div className={style.dialogs}>
            <div div className={style.dialogItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className="messageItems">
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
}

export default Dialogs;