import s from "./Post.module.scss";
import recycle from "../../../../../assets/images/recycle-bin.png";
import { connect } from "react-redux";
import { deletePost } from "../../../../../redux/profilePageReducer";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.post__wrap}>
        <img src={props.ava} alt="Ava" className={s.poster_ava} />
        <div className={s.post__body}>
          <p className={s.post__date}>{props.date}</p>
          <p className={s.post__text}> {props.message} </p>
          <div className={s.likes}>
            <a href="S#">
              <img
                className={s.like_icon}
                src="https://www.vectorico.com/wp-content/uploads/2018/02/Like-Icon.png"
                alt="Like"
              />
            </a>
            <span className={s.likes_count}>{props.likesCount} Likes</span>
            {+props.selectedUserID === props.authUserID && (
              <img
                onClick={() => {
                  props.deletePost(props.id);
                }}
                className={s.recycleIcon}
                src={recycle}
                alt="recycle"
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
