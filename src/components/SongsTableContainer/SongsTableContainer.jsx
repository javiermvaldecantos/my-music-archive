import React, {Component} from 'react';
import SongsTable from '../SongsTable';

import store from '../../store';
import { loadSongs } from '../../actions/musicArchiveAction';

import { connect } from 'react-redux';
const mapStateToProps = state => ({
    songs: state.musicArchiveReducer.songs
});

class SongsTableContainer extends Component {
  render() {
    return (
      <SongsTable songs={this.props.songs} />
    )
  }

  componentDidMount() {
    // Llamamos a la API para cargar la lista de canciones        
    store.dispatch(loadSongs());
  }
}

export default connect(mapStateToProps)(SongsTableContainer);