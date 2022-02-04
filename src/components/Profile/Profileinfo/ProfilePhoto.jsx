import s from "./Profileinfo.module.scss";
import noUser from "../../../assets/images/User.png";

const ProfilePhoto = ({ authUserID, selectedUserID, userPhoto, savePhoto }) => {
  const onProfilePhotoSelected = (e) => {
    const selectedPhoto = e.target.files[0];
    savePhoto(selectedPhoto);
  };
  return (
    <div className={s.profilePhotoWrapper}>
      <img
        className={s.profileinfo__ava}
        src={userPhoto || noUser}
        alt="Avatar"
      />
      {authUserID === +selectedUserID && (
        <div>
          <label htmlFor="file-upload" className={s.changePhotoLabel}>
            Change Photo
          </label>
          <input id="file-upload" onChange={onProfilePhotoSelected} className={s.changePhotoButton} type={"file"}/>
        </div>
      )}
    </div>
  );
};

export default ProfilePhoto;
