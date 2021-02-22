import React from 'react'; 
import { NavLink } from 'react-router-dom';
import style from'./Dialogs.module.css';
// import App.css from './../'

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <div div className={style.dialogItems}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1"> Юля </NavLink>
                </div>
                <div className={style.dialog + ' ' + style.new }>
                    <NavLink to="/dialogs/2"> Артур</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/3">Карина</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/4">Никита</NavLink>
                </div>
                <div className={style.dialog}> 
                    <NavLink to="/dialogs/5 ">Ильмира</NavLink>
                </div>
            </div>
            <div className="messageItems">
                <div className="message">Hi</div>
                <div className="message">Whats wrong</div>
                <div className="message">Deep sea</div>
            </div>
        </div>
    );
}

export default Dialogs;