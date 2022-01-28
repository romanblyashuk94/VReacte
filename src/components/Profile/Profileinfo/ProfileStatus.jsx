import React from "react";
import s from "./Profileinfo.module.scss";
import editButton from "../../../assets/images/editButton.png";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatus = ({
  userStatus,
  authUserID,
  selectedUserID,
  updateUserStatus,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [currentInputStatus, setcurrentInputStatus] = useState(userStatus);

  useEffect(() => {
    setcurrentInputStatus(userStatus);
  }, [userStatus]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    updateUserStatus(currentInputStatus);
  };
  const onStatusChange = (e) => {
    setcurrentInputStatus(e.currentTarget.value);
  };

  return (
    <div className={s.userStatusBlock}>
      {editMode ? (
        <div className={s.userStatusEditor}>
          <input value={currentInputStatus} onChange={onStatusChange} />
          <button className={s.okButton} onClick={deactivateEditMode}>
            OK
          </button>
        </div>
      ) : (
        <div>
          <span className={s.userStatusText}>{userStatus}</span>
          {authUserID === +selectedUserID ? (
            <img
              className={s.editButton}
              onClick={activateEditMode}
              src={editButton}
              alt="editButton"
            />
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
