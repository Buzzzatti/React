import React from 'react'; 
import { NavLink } from 'react-router-dom';
import style from'./../Dialogs.module.css';
// import App.css from './../'

const DialogItem = (props) => {
    return(
        <div className={style.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>{props.name} </NavLink>
        </div>
    )
}

export default DialogItem;