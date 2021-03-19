import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content/Content';
import DialogsContainer from './components/Dialogs/DialogsContainer';




const App = (props) => {
  
  

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav  />
        <div className='app_wrapper_content'>
          {/* <Route  path='/dialogs' component={Dialogs}/> */}
          <Route  path='/dialogs' render={ () => <DialogsContainer store={props.store}/> }/>

          {/* <Route  path='/content' component={Content} postsData={postsData} /> */}
          <Route  path='/content' render={ () => <Content store={props.store} /> }/>

          <Route  path='/news' component={News}/>
          <Route  path='/music' component={Music}/>
          <Route  path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
