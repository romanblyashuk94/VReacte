const Profile = () => {
    return (
        <div className="maincontent grid_element">
          <img src="https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt="" className="wall" />
          <div className="profile">
            <div className="profile__wrap">
              <div>
                <img className="profile__ava" src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Avatar" />
              </div>
              <div className="profile__body">
                <div className="profile__name">Uzumaki Naruto</div>
                <div className="profile__info">
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
          <div className="new-posts">
            <h2 className="new-posts__title">My Posts</h2>
            <form action="S#">
              <textarea className="new-post__area" placeholder='Your news...' name="Post"></textarea>
              <button className="new-post_button" type="submit">Post</button>
            </form>
          </div>
          <div className="posts">
            <div className="post">
              <div className="post__wrap">
                <img src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Ava" className="poster-ava" />
                <div className="post__body">
                  <p className="post__date">8/25/2021 5:21 PM</p>
                  <p className="post__text"> Sasuke sad that he don't want return to vilage :((</p>
                </div>
              </div>
            </div>
            <div className="post">
              <div className="post__wrap">
                <img src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Ava" className="poster-ava" />
                <div className="post__body">
                  <p className="post__date">8/23/2021 5:21 PM</p>
                  <p className="post__text">Studied the Rasengan technique today. It turned out to be harder than I thought. I hope I will succeed</p>
                </div>
              </div>
            </div>
          </div>
         </div>
    )
}

export default Profile