import React, {Component} from 'react';
import SongsTable from '../SongsTable';

import { loadSongs } from '../../actions/musicArchiveAction';

import { connect } from 'react-redux';
const mapStateToProps = state => ({
    songs: state.musicArchiveReducer.songs
});
const mapDispatchToProps = dispatch => ({
  loadSongs: () => dispatch(loadSongs())
});

class SongsTableContainer extends Component {
  render() {
    return (
      <SongsTable songs={this.props.songs} />
    )
  }

  componentDidMount() {
    // Llamamos a la API para cargar la lista de canciones        
    this.props.loadSongs();
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SongsTableContainer);