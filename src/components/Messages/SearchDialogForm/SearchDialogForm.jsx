import s from "./SearchDialogForm.module.scss";

const SearchDialogForm = () => {
  return (
    <form className={s.searchForm} action="#">
      <input type="text" placeholder="Search" className={s.search} />
    </form>
  );
};

export default SearchDialogForm;
