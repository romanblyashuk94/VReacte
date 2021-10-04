import { useEffect } from "react";
import s from "./UsersArea.module.scss";
import UserItem from "./UsersItem/UserItem";

const UsersArea = (props) => {
  useEffect(() => {
    if (props.users.length === 0) {
      props.setUsers([
        {
          id: 1,
          userPhoto:
            "https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z",
          folowedStatus: true,
          userName: "Naruto",
          userStatus: "I will be HOKAGE!",
          location: { city: "Conoha", country: "Fire Country" },
        },
        {
          id: 2,
          userPhoto:
            "https://i1.sndcdn.com/avatars-000354584510-msismh-t500x500.jpg",
          folowedStatus: false,
          userName: "Spider Man",
          userStatus: "Hi! Whats up?",
          location: { city: "New York", country: "USA" },
        },
        {
          id: 3,
          userPhoto:
            "https://pbs.twimg.com/profile_images/992736553507188736/_0kbr7--.jpg",
          folowedStatus: true,
          userName: "Jack Sparrow",
          userStatus: "Yo-ho-ho!!! Who wants some rum?",
          location: { city: "Kyiv", country: "Ukraine" },
        },
      ]);
    }
  });
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <UserItem
          key={props.id}
          id={u.id}
          userPhoto={u.userPhoto}
          userName={u.userName}
          folowedStatus={u.folowedStatus}
          changeFolowedStatus={props.changeFolowedStatus}
          userStatus={u.userStatus}
          location={u.location}
        />
      ))}
    </div>
  );
};

export default UsersArea;
