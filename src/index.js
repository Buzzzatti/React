import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postsData = [
  {id: 1, like: 19, message: 'First post words'},
  {id: 2, like: 3, message: 'Second post words'}
]

let dialogsData = [
  {id: 1, name: 'Юля'},
  {id: 2, name: 'Артур'},
  {id: 3, name: 'Карина'},
  {id: 4, name: 'Никита'},
  {id: 5, name: 'Ильмира'}
]

let messagesData = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How are you'},
  {id: 3, message: 'What the Fuck '}
]

ReactDOM.render(
  <React.StrictMode>

  

    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
