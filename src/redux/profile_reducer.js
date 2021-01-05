const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 23},
        {id: 2, message: 'test post', likesCount: 1},
        {id: 2, message: 'Bla bla bla', likesCount: 1},
        {id: 2, message: 'Da-da', likesCount: 1}
    ],
    newPostText: 'reakt-first-demo'
};

const profilePage = (state = initialState, action) => {
    switch(action.type)
    {
        case ADD_POST:{
            let newPost = {
              id: 5,
              message: state.newPostText,
              likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
          }
            
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state;
        }

        default : 
            return state;
    }
}

export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profilePage;