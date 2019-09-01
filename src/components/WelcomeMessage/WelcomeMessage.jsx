import React from 'react';
import { Link } from 'react-router-dom';

const WelcomeMessage = () => (
  <div className="welcome-message">
    <p>
      This is my music archive.
    </p>
    <p>
      To see the list of songs, go to <Link className="welcome-message--link" to="/all-songs">All songs</Link>.
    </p>
    <p>
      To add a new song on the archive, go to <Link className="welcome-message--link" to="/new-song-form">Add new song</Link>.
    </p>
  </div>
);

export default WelcomeMessage;
