import s from "./UsersArea.module.scss";
import UserItem from "./UsersItem/UserItem";
import * as axios from "axios";
import React from "react";

class UsersArea extends React.Component {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  }

  changePage = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items, response.data.totalCount);
      });
  };

  render() {
    let pagesCount = Math.ceil(
      this.props.totalUsersCount / this.props.pageSize
    );

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

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
        <button className={s.showUsersButton}>Show More</button>
        <div className={s.pagesWraper}>
          {pages.map((p) => (
            <span
              onClick={() => {
                this.changePage(p);
              }}
              key={p}
              className={
                this.props.currentPage === p
                  ? s.selectedPage
                  : s.notSelectedPage
              }
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

export default UsersArea;
