import s from "./SearchUserForm.module.scss";

const SearchUserForm = (props) => {
  let changeSearchUserFormValue = (e) => {
    props.changeSearchUserFormValue(e.target.value);
  };

  return (
    <div className={s.searchForm}>
      <input
        onChange={changeSearchUserFormValue}
        value={props.searchUserFormValue}
        type="text"
        placeholder="Search user"
        className={s.search}
      />
    </div>
  );
};

export default SearchUserForm;
