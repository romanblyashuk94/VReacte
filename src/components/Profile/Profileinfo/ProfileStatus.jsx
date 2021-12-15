import React from "react";
import s from "./Profileinfo.module.scss";
import editButton from "../../../assets/images/editButton.png";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    userStatus: this.props.userStatus,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.userStatus !== this.props.userStatus) {
      this.setState({
        userStatus: this.props.userStatus,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateUserStatus(this.state.userStatus);
  };

  onStatusChange = (e) => {
    this.setState({
      userStatus: e.currentTarget.value,
    });
  };
  render() {
    return (
      <div className={s.userStatusBlock}>
        {!this.state.editMode ? (
          <div>
            <span className={s.userStatusText}>{this.props.userStatus}</span>
            {this.props.authUserID === +this.props.selectedUserID ? (
              <img
                onClick={this.activateEditMode}
                className={s.editButton}
                src={editButton}
                alt="editButton"
              />
            ) : null}
          </div>
        ) : (
          <div className={s.userStatusEditor}>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              value={this.state.userStatus}
            />
            <button className={s.okButton} onClick={this.deactivateEditMode}>
              OK
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
