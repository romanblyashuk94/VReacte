import profilePageReducer, { addPost, deletePost } from "./profilePageReducer";
let state = {
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
};

it("length of postsData array should be 4", () => {
  // 1. Testing data

  let action = addPost("Hey Yo!");

  //2. action
  let newState = profilePageReducer(state, action);

  //3. Expectation
  expect(newState.postsData.length).toBe(4);
});

it('message of new post should be "Hello Test"', () => {
  // 1. Testing data

  let action = addPost("Hello Test");

  //2. action
  let newState = profilePageReducer(state, action);

  //3. Expectation
  expect(newState.postsData[0].message).toBe("Hello Test");
});

it('post should be delete', () => {

  let action = deletePost(3);

  let newState = profilePageReducer(state, action);

  expect(newState.postsData.length).toBe(2);
})
