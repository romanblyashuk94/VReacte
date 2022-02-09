import s from "./Profileinfo.module.scss";
import ProfileStatus from "./ProfileStatus";
import ProfilePhoto from "./ProfilePhoto";
import ProfileData from "./ProfileData/ProfileData";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";
import { useState } from "react";

const Profileinfo = ({
  userProfile,
  authUserID,
  selectedUserID,
  savePhoto,
  saveProfileData,
  ...props
}) => {
  const [editMode, setEditMode] = useState(false);
  const isOwner = authUserID === +selectedUserID;

  const onSumbitProfileDataForm = (formData) => {
    saveProfileData(formData, authUserID)
      .then(() => setEditMode(false))
      .catch( () => {console.log ('error')});
  };

  return (
    <div className={s.profileinfo}>
      <div className={s.profileinfo__wrap}>
        <ProfilePhoto
          isOwner={isOwner}
          userPhoto={userProfile.photos.large}
          savePhoto={savePhoto}
        />
        <div className={s.profileinfo__body}>
          <div className={s.profileinfo__name}>{userProfile.fullName}</div>
          <ProfileStatus isOwner={isOwner} {...props} />
          <ProfileData goToEditMode={setEditMode} {...userProfile} />
          {editMode && (
            <ProfileDataForm
              initialValues={userProfile}
              onSubmit={onSumbitProfileDataForm}
              setEditMode={setEditMode}
            />
          )}
        </div>
        {isOwner && (
          <div className={s.profileEditor}>
            <button
              onClick={() => setEditMode(true)}
              className={s.editProfileButton}
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profileinfo;
