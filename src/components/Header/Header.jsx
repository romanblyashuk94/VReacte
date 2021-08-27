import s from './Header.module.scss'

const Header = () => {
    return (         
    <header className={`${s.header} grid_element`}>
    <a href="S#">
      <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/VR_Group_logo.svg/1280px-VR_Group_logo.svg.png" alt="logo"  />
      <span>eacte</span>
    </a>
  </header>
  )
}

export default Header