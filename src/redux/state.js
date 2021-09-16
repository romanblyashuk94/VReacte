let state = {
  messagesPage: {
    messagesData: [
      {
        id: 1,
        text: "Hi! Yo!",
        time: "3:00 pm",
        isMyMessage: true,
      },
      { id: 2, text: "Hola", time: "3:03 pm", isMyMessage: false },
      {
        id: 3,
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
        id: 3,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: "Hey,yo!",
        date: "8/29/2021 8:36 PM",
        likesCount: 10,
      },
      {
        id: 2,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: "I am learning ReactJs",
        date: "8/28/2021 6:24 PM",
        likesCount: 8,
      },
      {
        id: 1,
        ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
        message: "Bla-bla-Bla",
        date: "8/28/2021 6:24 PM",
        likesCount: 2,
      },
    ],
  },
  friendsOnlineData: [
    {
      id: 1,
      avatar:
        "https://russkaja-skazka.ru/wp-content/uploads/2016/08/russkaya-skazka-kolobok-s-kartinkami-chitat-min.jpg",
      name: "Kolobok Ivanovich",
    },
    {
      id: 2,
      avatar:
        "https://www.redwolf.in/image/catalog/designer-Images/themes/iron-man-artist-image.png",
      name: "Iron Man",
    },
    {
      id: 3,
      avatar: "https://upload.wikimedia.org/wikipedia/ru/6/6b/NyanCat.gif",
      name: "Nyan Cat",
    },
    {
      id: 4,
      avatar:
        "https://play-lh.googleusercontent.com/tWOCFum34rKMnhBEQJLHHjRV6qQdlwDCdn4YIY5Yly9LIcuqdtdiGmeWq7XHnmekEC2z",
      name: "Naruto",
    },
    {
      id: 5,
      avatar:
        "https://pbs.twimg.com/profile_images/992736553507188736/_0kbr7--.jpg",
      name: "Jack Sparrow",
    },
  ],
};

export let addPost = (postText) => {
  let newPost = {
    id: state.profilePage.postsData.length + 1,
    ava: "https://avatars.githubusercontent.com/u/83500664?v=4",
    message: postText,
    date: "8/29/2021 8:36 PM",
    likesCount: 0,
  };

  state.profilePage.postsData.unshift(newPost);
};

export let sendMessage = (messageText) => {
  let newMessage = {
    id: state.messagesPage.messagesData.length + 1,
    text: messageText,
    time: "3:00 pm",
    isMyMessage: true,
  };
  state.messagesPage.messagesData.push(newMessage);
};

export default state;
