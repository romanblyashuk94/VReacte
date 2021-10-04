import SearchUserFormContainer from "./SearchUserForm/SearchUserFormContainer";
import s from "./Users.module.scss";
import UsersAreaContainer from "./UsersArea/UsersAreaContainer";
import UsersFilter from "./UsersFilter/UsersFilter";

const Users = (props) => {
  return (
    <div className={s.users}>
    <SearchUserFormContainer />
    <UsersAreaContainer />
    <UsersFilter />
    </div>
  );
};

export default Users;
