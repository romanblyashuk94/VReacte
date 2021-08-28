import s from './Post.module.scss'


const Post = () => {
  return (
  <div className={s.post}>
    <div className={s.post__wrap}>
      <img src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Ava" className={s.poster_ava} />
      <div className={s.post__body}>
        <p className={s.post__date}>8/25/2021 5:21 PM</p>
        <p className={s.post__text}> Sasuke said, that he don't want return to vilage! :((</p>
      </div>
    </div>
  </div>
  )
}

export default Post