import {rerender} from '../render'


let state = {
    contentPage:{
        postsData: [
            {id: 1, like: 19, message: 'First post words'},
            {id: 2, like: 3, message: 'Second post words'}],
        newPostText:'Vvedite text'
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
    
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.contentPage.newPostText,
        like:0
    };

    state.contentPage.postsData.push(newPost);
    rerender(state);
}

export let updateNewTextChange = (newText) => {
    state.contentPage.newPostText = newText;
    rerender(state);
}

export default state;