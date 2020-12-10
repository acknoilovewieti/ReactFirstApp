import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './redux/state';
import {addPost, subscribe, updateNewPostText} from './redux/state';
import * as serviceWorker from './serviceWorker';


export let renderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode><App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/></React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
