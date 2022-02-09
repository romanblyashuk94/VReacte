import ProfileConstacts from "./ProfileContacts";
import s from "./ProfileData.module.scss";

const ProfileData = ({
  aboutMe,
  lookingForAJob,
  lookingForAJobDescription,
  contacts,
  goToEditMode
}) => {
  
  return (
    <div className={s.profileinfo__info}>
      <ul>
        <li>
          About me:{" "}
          {aboutMe || (
            <span className={s.noInformationSpan}>No information</span>
          )}
        </li>
        <li>
          Looking for a job:{" "}
          {lookingForAJob ? (
            <span className={s.yesSpan}>Yes!</span>
          ) : (
            <span className={s.noSpan}>No!</span>
          )}
        </li>
        <li className={s.lookingForAJobDescription}>
          {lookingForAJob
            ? `Job description: ${lookingForAJobDescription}`
            : null}
        </li>
      </ul>
      <ProfileConstacts contacts={contacts} />
    </div>
  );
};
export default ProfileData;
