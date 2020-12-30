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
    }
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

  

  dispatch(action) { // {type: 'ADD_POST'}
    if (action.type === 'ADD_POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber();
    }
    else if (action.type === 'UPDATE_NEW_POST_TEXT')
    {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber();
    } 
  }
}

export default store;
window.store = store;
// store - OOP