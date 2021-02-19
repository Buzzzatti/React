import React from 'react'
import './App.css';
import Components from './components/Content';
import Header from './components/Header';
import Nav from './components/Nav';



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
