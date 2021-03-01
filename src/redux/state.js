let state = {
    contentPage:{
        postsData: [
            {id: 1, like: 19, message: 'First post words'},
            {id: 2, like: 3, message: 'Second post words'}]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        like:0
    };

    state.contentPage.postsData.push(newPost);
    rerender();
}

export default state;