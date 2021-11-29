import React from "react";
import s from "./Profileinfo.module.scss";
import editButton from '../../../assets/images/editButton.png'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }
  render() {
    return (
      <div className={s.userStatusBlock}>
        {!this.state.editMode ? (
          <div>
            <span className={s.userStatusText}>{this.props.userStatus}</span>
            <img onClick={this.activateEditMode} className={s.editButton} src={editButton} alt="editButton" />
          </div>
        ) : (
          <div className={s.userStatusEditor}>
            <input autoFocus={true} value={this.props.userStatus} />
            <button className={s.okButton} onClick={this.deactivateEditMode}>OK</button>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
