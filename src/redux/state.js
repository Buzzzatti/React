let store = {
    _state: {
        contentPage:{
            postsData: [
                {id: 1, like: 19, message: 'First post words'},
                {id: 2, like: 3, message: 'Second post words'}],
            newPostText: 'Vvedite text'
        },
        dialogsPage:{
            dialogsData: [
                {id: 1, name: 'Юля'},
                {id: 2, name: 'Артур'},
                {id: 3, name: 'Карина'},
                {id: 4, name: 'Никита'},
                {id: 5, name: 'Ильмира'}],
            messagesData: [ 
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you'},
                {id: 3, message: 'What the Fuck '}]
        }
        
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.contentPage.newPostText,
                like:0
            };
            this._state.contentPage.postsData.push(newPost);
            this._state.contentPage.newPostText = '';
            this._rerender(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.contentPage.newPostText = action.newText;
            this._rerender(this._state);
        }
    }
    
}

window.store = store;
export default store;