import SearchUserForm from "./SearchUserForm/SearchUserForm";
import s from "./Users.module.scss";
import UsersAreaContainer from "./UsersArea/UsersAreaContainer";
import UsersFilter from "./UsersFilter/UsersFilter";

const Users = () => {
  return (
    <div className={s.users}>
      <SearchUserForm />
      <UsersAreaContainer />
      <UsersFilter />
    </div>
  );
};

export default Users;
