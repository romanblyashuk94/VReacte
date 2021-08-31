import { NavLink } from 'react-router-dom'
import s from './Navbar.module.scss'

const Navbar = () => {
    return (
    <nav className={`${s.navbar} grid_element`}>
        <ul>
            <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
            <li><NavLink to="/messages" activeClassName={s.active}>Messages</NavLink></li>
            <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
            <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
            <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
        </ul>
    </nav>)
}

export default Navbar