import React from "react";
import s from "./Profileinfo.module.scss";
import editButton from "../../../assets/images/editButton.png";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatus = ({ userStatus, isOwner, updateUserStatus }) => {
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
          {isOwner && (
            <img
              className={s.editButton}
              onClick={activateEditMode}
              src={editButton}
              alt="editButton"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
