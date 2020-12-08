import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 23},
            {id: 2, message: 'test post', likesCount: 1},
            {id: 2, message: 'Bla bla bla', likesCount: 1},
            {id: 2, message: 'Da-da', likesCount: 1}
          ],
          newPostText: 'reakt-first-demo'
        },

    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "DimViktorych"},
            {id: 6, name: "Valera"}
          ],
        messages: [
                {id: 1, message: "Hi"},
                {id: 1, message: "Hi, how are you"},
                {id: 1, message: "Fine, thanks"},
                {id: 1, message: "Yo"},
                {id: 1, message: "Yo"}
            ]
    }
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export default state;