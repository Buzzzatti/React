import { combineReducers, createStore } from "redux";
import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
    contentPage: contentReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducers);

window.store = store;

export default store;