import {combineReducers, createStore} from "redux";
import profilePage from "./profile_reducer";
import dialogsPage from "./dialogs_reducer";
import sideBar from "./sidebar_reducer";

let reducers = combineReducers({
    profilePage,
    dialogsPage,
    sideBar
});

let store = createStore(reducers);

export default store;