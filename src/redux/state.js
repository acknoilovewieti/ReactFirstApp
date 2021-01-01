import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";
import { sidebarReducer } from "./sidebar_reducer";

let store = {
  _state: 
  {
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
    },
    sidebar: {}
  },
  _callSubscriber() 
  {
    console.log('State changed');
  },


  getState()
  {
    return this._state;
  },
  subscribe(observer) 
  {
    this._callSubscriber = observer;
  },
  

  dispatch(action) 
  { 
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber();
  }
}

export default store;
window.store = store;
// store - OOP