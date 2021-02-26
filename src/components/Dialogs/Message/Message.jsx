import React from 'react'; 
import { NavLink } from 'react-router-dom';
import style from'./../Dialogs.module.css';
// import App.css from './../'


const Message = (props) => {
    return(
        <div className="message">{props.message}</div>
    )
}

export default Message;