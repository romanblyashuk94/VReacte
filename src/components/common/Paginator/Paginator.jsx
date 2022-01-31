import s from "./Paginator.module.scss";
import { showPagesCount } from "../../../helpers/helpers";

const Paginator = ({ totalItemsCount, pageSize, currentPage, changePage }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={s.pagesWraper}>
      {showPagesCount(pagesCount, currentPage).map((p) => {
        if (p === 0) {
          return (
            <span key={p} className={s.notSelectedPage}>
              ...
            </span>
          );
        }
        return (
          <span
            onClick={() => {
              changePage(p);
            }}
            key={p}
            className={currentPage === p ? s.selectedPage : s.notSelectedPage}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};
export default Paginator;
