import s from "./UsersFilter.module.scss";

const UsersFilter = (props) => {
  return (
    <div className={s.usersFilter}>
      <div className={s.title}>Filter</div>
      <div className={s.filterOptions}>
        <div className={s.optionsGroup}>
          <p className={s.subtitle}>Followed status:</p>
          <div className={s.option}>
            <input type="radio" name="followesStatus" /> Followed
          </div>
          <div className={s.option}>
            <input type="radio" name="followesStatus" /> Unfollowed
          </div>
        </div>
        <div className={s.optionsGroup}>
          <p className={s.subtitle}>Gender:</p>
          <div className={s.option}>
            <input type="radio" name="Gender" /> Male
          </div>
          <div className={s.option}>
            <input type="radio" name="Gender" /> Female
          </div>
        </div>
        <div className={s.optionsGroup}>
          <p className={s.subtitle}>Location:</p>
          <div className={s.option}>
            <p>Country:</p>
            <input
              type="text"
              name="followesStatus"
              placeholder="Enter country"
            />
          </div>
          <div className={s.option}>
            <p>City:</p>
            <input type="text" name="followesStatus" placeholder="Enter city" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersFilter;
