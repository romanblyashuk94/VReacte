import s from "./UsersArea.module.scss";
import UserItem from "./UsersItem/UserItem";
import * as axios from "axios";

const UsersArea = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }
  };
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <UserItem
          key={u.id}
          id={u.id}
          userPhoto={u.photos.small}
          userName={u.name}
          folowedStatus={u.followed}
          changeFolowedStatus={props.changeFolowedStatus}
          userStatus={u.status}
          location={u.location}
        />
      ))}
      <button className={s.showUsersButton} onClick={getUsers}>
        Get Users
      </button>
    </div>
  );
};

export default UsersArea;
