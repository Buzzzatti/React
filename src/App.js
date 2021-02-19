import React from 'react'
import './App.css';
import Components from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Nav/>
      <Components/>
    </div>
  );
}


export default App;
