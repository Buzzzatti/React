import React from 'react'; 
import style from'./Nav.module.css';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return(
        <nav className={style.nav}>
            <div className={style.item}>
                <NavLink to="/Content" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <NavLink to="/Dialogs" activeClassName={style.activeLink}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/News" activeClassName={style.activeLink}>News</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Settings" activeClassName={style.activeLink}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;