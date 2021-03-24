import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';




const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Nav  />
        <div className='app_wrapper_content'>
          <Route  path='/dialogs' render={ () => <DialogsContainer/> }/>

          <Route  path='/content' render={ () => <Content /> }/>

          <Route  path='/users' render={ () => <UsersContainer /> }/>

          <Route  path='/news' component={News}/>
          <Route  path='/music' component={Music}/>
          <Route  path='/settings' component={Settings}/>
        </div>
      </div>
  );
}


export default App;
