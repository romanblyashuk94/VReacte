import s from './Post.module.scss'


const Post = (props) => {
  return (
  <div className={s.post}>
    <div className={s.post__wrap}>
      <img src="https://www.ejin.ru/wp-content/uploads/2017/12/46861.jpg" alt="Ava" className={s.poster_ava} />
      <div className={s.post__body}>
        <p className={s.post__date}>{props.date}</p>
        <p className={s.post__text}> {props.message} </p>
        <div className={s.likes}>
          <a href="S#"><img className={s.like_icon} src="https://www.vectorico.com/wp-content/uploads/2018/02/Like-Icon.png" alt="Like" /></a>
          <span className={s.likes_count}>{props.likesCount} Likes</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Post