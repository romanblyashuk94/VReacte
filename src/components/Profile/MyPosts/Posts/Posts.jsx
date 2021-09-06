import Post from './Post/Post'
import s from './Posts.module.scss'


const Posts = () => {
  let postData = [
    {id: 1, message: "Sasuke said, that he don't want return to vilage! :((", date: "8/29/2021 8:36 PM", likesCount: 10, },
    {id: 2, message: "Studied the Rasengan technique today. It turned out to be more difficult than I thought. I hope I succeed", date: "8/28/2021 6:24 PM", likesCount: 8, },
    {id: 3, message: "Bla-bla-Bla", date: "8/28/2021 6:24 PM", likesCount: 2, },
  ];

  let postElements = postData.map(p => <Post message={p.message} date={p.date} likesCount={p.likesCount}/>)
  return (
    <div className={s.posts}>
      {postElements}
    </div>
  )
}

export default Posts