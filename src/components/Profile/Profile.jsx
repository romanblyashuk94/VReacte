import s from './Profile.module.scss'


const Profile = () => {
    return (
        <div className={`${s.maincontent} grid_element`}>
          <img src="https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="" className={s.wall} />
          <div className={s.profile}>
            <div className={s.profile__wrap}>
              <div>
                <img className={s.profile__ava} src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Avatar" />
              </div>
              <div className={s.profile__body}>
                <div className={s.profile__name}>Uzumaki Naruto</div>
                <div className={s.profile__info}>
                  <ul>
                    <li>Date of Birth: 10 Oct</li>
                    <li>City: Konoha</li>
                    <li>Education: Genin</li>
                    <li>Web Sitre: <a href="https://jut.su/">https://jut.su/</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={s.new_posts}>
            <h2 className={s.new_posts__title}>My Posts</h2>
            <form action="S#">
              <textarea className={s.new_post__area} placeholder='Your news...' name="Post"></textarea>
              <button className={s.new_post_button} type="submit">Post</button>
            </form>
          </div>
          <div className={s.posts}>
            <div className={s.post}>
              <div className={s.post__wrap}>
                <img src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Ava" className={s.poster_ava} />
                <div className={s.post__body}>
                  <p className={s.post__date}>8/25/2021 5:21 PM</p>
                  <p className={s.post__text}> Sasuke sad that he don't want return to vilage :((</p>
                </div>
              </div>
            </div>
            <div className={s.post}>
              <div className={s.post__wrap}>
                <img src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Ava" className={s.poster_ava} />
                <div className={s.post__body}>
                  <p className={s.post__date}>8/23/2021 5:21 PM</p>
                  <p className={s.post__text}>Studied the Rasengan technique today. It turned out to be harder than I thought. I hope I will succeed</p>
                </div>
              </div>
            </div>
          </div>
         </div>
    )
}

export default Profile