import Post from './Post/Post'
import s from './Posts.module.scss'


const Posts = () => {
  return (
    <div className={s.posts}>
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts