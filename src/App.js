import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ContentContainer from './components/Content/ContentContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';




const App = (props) => {
  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav  />
        <div className='app_wrapper_content'>
          <Route  path='/dialogs' render={ () => <DialogsContainer/> }/>

          <Route  path='/content/:userId?' render={ () => <ContentContainer /> }/>

          <Route  path='/users' render={ () => <UsersContainer /> }/>

          <Route  path='/login' render={ () => <LoginPage/> }/>

          <Route  path='/news' component={News}/>
          <Route  path='/music' component={Music}/>
          <Route  path='/settings' component={Settings}/>
        </div>
      </div>
  );
}


export default App;
