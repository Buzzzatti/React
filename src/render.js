import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import state from './redux/state'
import {addPost, updateNewTextChange} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerender = (state) => {

  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} updateNewTextChange={updateNewTextChange}/>
    </BrowserRouter>, document.getElementById('root')
  );

}

