import Post from './Post/Post'
import s from './Posts.module.scss'


const Posts = () => {
  return (
    <div className={s.posts}>
      <Post likesCount="10" date="8/29/2021 8:36 PM" message="Sasuke said, that he don't want return to vilage! :((" />
      <Post likesCount="8"date="8/28/2021 6:24 PM" message="Studied the Rasengan technique today. It turned out to be more difficult than I thought. I hope I succeed"/>
    </div>
  )
}

export default Posts