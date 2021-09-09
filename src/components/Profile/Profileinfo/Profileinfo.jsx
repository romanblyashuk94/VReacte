import s from './Profileinfo.module.scss'


const Profileinfo = () => {
    return (
      <div className={s.profileinfo}>
            <div className={s.profileinfo__wrap}>
              <div>
                <img className={s.profileinfo__ava} src="https://avatars.githubusercontent.com/u/83500664?v=4" alt="Avatar" />
              </div>
              <div className={s.profileinfo__body}>
                <div className={s.profileinfo__name}>Roman Bliashuk</div>
                <div className={s.profileinfo__info}>
                  <ul>
                    <li>Date of Birth: 05 Oct 1994</li>
                    <li>City: Kyiv</li>
                    <li>Education: Trainee Front-End Developer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Profileinfo