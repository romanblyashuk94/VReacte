import s from "./UsersArea.module.scss";
import UserItem from "./UsersItem/UserItem";
import * as axios from "axios";
import React from "react";

class UsersArea extends React.Component {

  constructor(props) {
    super(props);
    
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    return (
      <div className={s.users}>
        {this.props.users.map((u) => (
          <UserItem
            key={u.id}
            id={u.id}
            userPhoto={u.photos.small}
            userName={u.name}
            folowedStatus={u.followed}
            changeFolowedStatus={this.props.changeFolowedStatus}
            userStatus={u.status}
            location={u.location}
          />
        ))}
        <button className={s.showUsersButton}>
          Show More
        </button>
      </div>
    );
  }
}

export default UsersArea;
