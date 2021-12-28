import s from "./Profileinfo.module.scss";
import noUser from "../../../assets/images/User.png";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const Profileinfo = (props) => {
  return (
    <div className={s.profileinfo}>
      <div className={s.profileinfo__wrap}>
        <div>
          <img
            className={s.profileinfo__ava}
            src={props.userProfile.photos.large || noUser}
            alt="Avatar"
          />
        </div>
        <div className={s.profileinfo__body}>
          <div className={s.profileinfo__name}>
            {props.userProfile.fullName}
          </div>
          <ProfileStatusWithHook
            selectedUserID={props.selectedUserID}
            authUserID={props.authUserID}
            userStatus={props.userStatus}
            updateUserStatus={props.updateUserStatus}
          />
          <div className={s.profileinfo__info}>
            <ul>
              <li>About me: {props.userProfile.aboutMe || "No information"}</li>
              <li>
                Looking for a job:{" "}
                {props.userProfile.lookingForAJob ? "Yes" : "No"}
              </li>
              <li>{props.userProfile.lookingForAJobDescription}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileinfo;
