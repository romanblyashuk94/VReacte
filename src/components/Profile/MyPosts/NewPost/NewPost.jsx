import s from './NewPost.module.scss'


const NewPost = () => {
    return (
      <div className={s.new_posts}>
            <h2 className={s.new_posts__title}>My Posts</h2>
            <form action="S#">
              <textarea className={s.new_post__area} placeholder='Your news...' name="Post"></textarea>
              <button className={s.new_post_button} type="submit">Post</button>
            </form>
          </div>
    )
}

export default NewPost