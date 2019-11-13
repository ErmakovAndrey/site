import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Front from './components/Front';
import Posts from './components/Posts';
import Users from './components/Users';
import Userpage from './components/Userpage';
import About from './components/About';
import Albums from './components/Albums';
import AlbumPage from './components/AlbumPage';
import PostPage from './components/PostPage';

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <main className="container">
        <Route path='/' component={Front} exact/>
        <Route path='/posts' component={Posts} exact/>
        <Route path='/albums' component={Albums} exact/>
        <Route path='/about' component={About} exact/>
        <Route path='/users' component={Users} exact/>
        <Route path='/users/:id' component={Userpage} />
        <Route path='/albums/:id/:userId/:title' component={AlbumPage} />
        <Route path='/posts/:id' component={PostPage}/>
      </main>
    </Router>
  )
}

export default App;
