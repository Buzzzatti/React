import React from 'react'
import './App.css';
import Components from './components/Content/Content';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';
import Content from './components/Content/Content';




const App = (props) => {
  
  

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav  />
        <div className='app_wrapper_content'>
          {/* <Route  path='/dialogs' component={Dialogs}/> */}
          <Route  path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} dispatch={props.dispatch}/> }/>

          {/* <Route  path='/content' component={Content} postsData={postsData} /> */}
          <Route  path='/content' render={ () => <Content contentPage={props.state.contentPage} dispatch={props.dispatch} /> }/>

          <Route  path='/news' component={News}/>
          <Route  path='/music' component={Music}/>
          <Route  path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
