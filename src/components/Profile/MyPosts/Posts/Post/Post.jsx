import s from "./Post.module.scss";
import deletePostIcon from "../../../../../assets/images/recycle-bin.png";
import { connect } from "react-redux";
import { deletePost } from "../../../../../redux/profilePageReducer";

const Post = ({
  selectedUserID,
  authUserID,
  postID,
  ava,
  date,
  message,
  likesCount,
  deletePost,
}) => {
  return (
    <div className={s.post}>
      <div className={s.post__wrap}>
        <img src={ava} alt="Ava" className={s.poster_ava} />
        <div className={s.post__body}>
          <p className={s.post__date}>{date}</p>
          <p className={s.post__text}> {message} </p>
          <div className={s.likes}>
            <a href="S#">
              <img
                className={s.like_icon}
                src="https://www.vectorico.com/wp-content/uploads/2018/02/Like-Icon.png"
                alt="Like"
              />
            </a>
            <span className={s.likes_count}>{likesCount} Likes</span>
            {+selectedUserID === authUserID && (
              <img
                onClick={() => {
                  deletePost(postID);
                }}
                className={s.deletePostIcon}
                src={deletePostIcon}
                alt="deletePostIcon"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authUserID: state.auth.id,
  };
};
export default connect(mapStateToProps, { deletePost })(Post);
