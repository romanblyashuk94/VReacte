import s from './Profileinfo.module.scss'


const Profileinfo = () => {
    return (
      <div className={s.profileinfo}>
            <div className={s.profileinfo__wrap}>
              <div>
                <img className={s.profileinfo__ava} src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Avatar" />
              </div>
              <div className={s.profileinfo__body}>
                <div className={s.profileinfo__name}>Uzumaki Naruto</div>
                <div className={s.profileinfo__info}>
                  <ul>
                    <li>Date of Birth: 10 Oct</li>
                    <li>City: Konoha</li>
                    <li>Education: Genin</li>
                    <li>Web Site: <a href="https://jut.su/">https://jut.su/</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Profileinfo