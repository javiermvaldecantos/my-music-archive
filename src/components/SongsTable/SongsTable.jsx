import React from 'react';

import './SongsTable.scss';

const SongsTable = ({ songs }) => (
  <div className="songs-table table-responsive-md">
    <table className="songs-table table">
      <thead className="thead-light">
        <tr>
          <th>Title</th>
          <th>Duration</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        {songs && songs.map( (element, index) =>
          <tr key={element.id}>
            <td>{element.title}</td>
            <td>{element.duration}</td>
            <td>{element.artist}</td>
            <td>{element.album}</td>
            <td>{element.genre}</td>
            <td>{element.rating}</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default SongsTable;