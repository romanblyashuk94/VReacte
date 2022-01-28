import s from "./Profileinfo.module.scss";
import noUser from "../../../assets/images/User.png";
import ProfileStatus from "./ProfileStatus";

const Profileinfo = ({ userProfile, ...props }) => {
  return (
    <div className={s.profileinfo}>
      <div className={s.profileinfo__wrap}>
        <div>
          <img
            className={s.profileinfo__ava}
            src={userProfile.photos.large || noUser}
            alt="Avatar"
          />
        </div>
        <div className={s.profileinfo__body}>
          <div className={s.profileinfo__name}>{userProfile.fullName}</div>
          <ProfileStatus {...props} />
          <div className={s.profileinfo__info}>
            <ul>
              <li>About me: {userProfile.aboutMe || "No information"}</li>
              <li>
                Looking for a job: {userProfile.lookingForAJob ? "Yes" : "No"}
              </li>
              <li>{userProfile.lookingForAJobDescription}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profileinfo;
