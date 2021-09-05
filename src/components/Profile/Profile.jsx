import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.scss'
import Profileinfo from './Profileinfo/Profileinfo'
import Wallpapper from './Wallpapper/Wallpapper'




const Profile = () => {
    return (
        <div className={s.profile}>
          <Wallpapper />
          <Profileinfo />
          <MyPosts />
        </div>
    )
}

export default Profile