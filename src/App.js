import React from 'react';
import { Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';
import SongsTableContainer from './components/SongsTableContainer/SongsTableContainer';
import SongForm from './components/SongForm/SongForm';

import './App.scss';

function App() {
  return (
    <div className="app container">
      <header className="app--header">
        <div className="app--title-wrapper jumbotron">
          <h1 className="app--title display-4">My Music Archive</h1>
        </div>
        <NavigationMenu />
      </header>
      <div className="app--body">
        <Route exact path="/" component={WelcomeMessage} />
        <Route exact path="/all-songs" component={SongsTableContainer} />
        <Route exact path="/new-song-form" component={SongForm} />
      </div>
    </div>
  );
}

export default App;
