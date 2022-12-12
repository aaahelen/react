import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/Profile'} className={navData => navData.isActive ? s.activeLink : s.item}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to={'/Dialogs'} className={navData => navData.isActive ? s.activeLink : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;