import s from "./Profileinfo.module.scss";
import ProfileStatus from "./ProfileStatus";
import ProfilePhoto from "./ProfilePhoto";

const Profileinfo = ({
  userProfile,
  authUserID,
  selectedUserID,
  savePhoto,
  ...props
}) => {
  return (
    <div className={s.profileinfo}>
      <div className={s.profileinfo__wrap}>
        <ProfilePhoto
          selectedUserID={selectedUserID}
          authUserID={authUserID}
          userPhoto={userProfile.photos.large}
          savePhoto={savePhoto}
        />
        <div className={s.profileinfo__body}>
          <div className={s.profileinfo__name}>{userProfile.fullName}</div>
          <ProfileStatus
            selectedUserID={selectedUserID}
            authUserID={authUserID}
            {...props}
          />
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
