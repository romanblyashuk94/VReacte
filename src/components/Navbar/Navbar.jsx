import s from './Navbar.module.scss'

const Navbar = () => {
    return (
    <nav className={`${s.navbar} grid_element`}>
        <ul>
            <li><a href="S#">Profile</a></li>
            <li><a href="S#">Messages</a></li>
            <li><a href="S#">News</a></li>
            <li><a href="S#">Music</a></li>
            <li><a href="S#">Setings</a></li>
        </ul>
    </nav>)
}

export default Navbar