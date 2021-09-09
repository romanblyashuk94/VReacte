let state = {
  messagesPage: {
    messagesData: [
      {
        id: 1,
        text: "Hi! Yo!",
        time: "3:00 pm",
        isMyMessage: true,
      },
      { id: 1, text: "Hola", time: "3:03 pm", isMyMessage: false },
      {
        id: 1,
        text: "blablabla",
        time: "3:04 pm",
        isMyMessage: true,
      },
    ],
    dialogsData: [
      {
        id: 1,
        userName: "Kolobok Ivanovich",
        avatar:
          "https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg",
        status: "Online",
      },
      {
        id: 2,
        userName: "Nyan Cat",
        avatar: "https://upload.wikimedia.org/wikipedia/ru/6/6b/NyanCat.gif",
        status: "Offline",
      },
      {
        id: 3,
        userName: "Iron Man",
        avatar:
          "https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
        status: "Online",
      },
    ],
  },
  profilePage: {
    postsData: [
      {
        id: 1,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: "Sasuke said, that he don't want return to vilage! :((",
        date: "8/29/2021 8:36 PM",
        likesCount: 10,
      },
      {
        id: 2,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message:
          "Studied the Rasengan technique today. It turned out to be more difficult than I thought. I hope I succeed",
        date: "8/28/2021 6:24 PM",
        likesCount: 8,
      },
      {
        id: 3,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: "Bla-bla-Bla",
        date: "8/28/2021 6:24 PM",
        likesCount: 2,
      },
    ],
  },
};

export default state;
