import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        contentPage:
        dialogsPage:
        
    },
    _rerender() {
        console.log('state was changed');
    },

    getState() {
        return this._state;
    }, 
    subscribe(observer) {
        this._rerender = observer;
    },

    dispatch(action){
        this._state.contentPage = contentReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._rerender(this._state);
    }
    
}








window.store = store;
export default store;