import React from "react";
import s from "./Profileinfo.module.scss";
import editButton from "../../../assets/images/editButton.png";
import { useState } from "react";
import { useEffect } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [userStatus, setUserStatus] = useState(props.userStatus);

  useEffect( () => {
    setUserStatus(props.userStatus);
  }, [props.userStatus])

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(userStatus);
  };
  const onStatusChange = (e) => {
    setUserStatus(e.currentTarget.value);
  };

  return (
    <div className={s.userStatusBlock}>
      {editMode ? (
        <div className={s.userStatusEditor}>
          <input value={userStatus} onChange={onStatusChange} />
          <button className={s.okButton} onClick={deactivateEditMode}>
            OK
          </button>
        </div>
      ) : (
        <div>
          <span className={s.userStatusText}>{userStatus}</span>
          {props.authUserID === +props.selectedUserID ? (
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
