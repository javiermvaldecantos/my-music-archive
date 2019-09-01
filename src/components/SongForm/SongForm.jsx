import React, {Component} from 'react';
import TextInput from '../TextInput/TextInput';

import './SongForm.scss';

import { connect } from 'react-redux';
import {
  resetNewSongForm,
  modifyNewSong,
  addNewSong,
  displayAddNewSongError
} from '../../actions/musicArchiveAction';
const mapStateToProps = state => ({
    title: state.musicArchiveReducer.newSong.title,
    artist: state.musicArchiveReducer.newSong.artist,
    album: state.musicArchiveReducer.newSong.album,
    genre: state.musicArchiveReducer.newSong.genre,
    duration: state.musicArchiveReducer.newSong.duration,
    rating: state.musicArchiveReducer.newSong.rating,
    addNewSongSuccess: state.musicArchiveReducer.addNewSongSuccess,
    addNewSongError: state.musicArchiveReducer.addNewSongError,
});
const mapDispatchToProps = dispatch => ({
  resetNewSongForm: () => dispatch(resetNewSongForm()),
  onNewSongChange: (fieldName, fieldValue) => dispatch(modifyNewSong(fieldName, fieldValue)),
  onAddNewSong: (newSong) => dispatch(addNewSong(newSong)),
  displayAddNewSongError: () => dispatch(displayAddNewSongError())
});

class SongForm extends Component {

  render() {
    return (
      <form className="song-form" onSubmit={this.onSongFormSubmit.bind(this)}>
        <div className="row">
          <div className="col-12">
            <TextInput
              labelText="Title"
              id="song-form--title"
              value={this.props.title}
              onChange={(event) => this.props.onNewSongChange('title', event.target.value)}
            />
          </div>
          <div className="col-12">
            <TextInput
              labelText="Artist"
              id="song-form--artist"
              value={this.props.artist}
              onChange={(event) => this.props.onNewSongChange('artist', event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              labelText="Album"
              id="song-form--album"
              value={this.props.album}
              onChange={(event) => this.props.onNewSongChange('album', event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              labelText="Genre"
              id="song-form--genre"
              value={this.props.genre}
              onChange={(event) => this.props.onNewSongChange('genre', event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              labelText="Duration"
              id="song-form--duration"
              placeholder="mm:ss"
              value={this.props.duration}
              onChange={(event) => this.props.onNewSongChange('duration', event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <TextInput
              labelText="Rating"
              id="song-form--rating"
              placeholder="Number from 1 (Awful) to 5 (Excellent)"
              value={this.props.rating}
              onChange={(event) => this.props.onNewSongChange('rating', event.target.value)}
            />
          </div>
        </div>
    
        <div className="song-form--submit-btn-wrapper row justify-content-center">
          <div className="col-md-5">
            <button type="submit" className="song-form--submit-btn btn btn-primary">
              Add to the archive
            </button>
            {this.props.addNewSongError &&
              <small className="form-text text-danger">
                All the fields are required. Please fill them out.
              </small>
            }
            {this.props.addNewSongSuccess &&
              <small className="form-text text-success">
                New song was added to the archive
              </small>
            }
          </div>

        </div>
        
      </form>
    );
  }

  componentDidMount() {
    this.props.resetNewSongForm();
  }

  onSongFormSubmit(event) {
    event.preventDefault();

    const newSong = {
      title: this.props.title,
      artist: this.props.artist,
      album: this.props.album,
      genre: this.props.genre,
      duration: this.props.duration,
      rating: this.props.rating,
    }

    // Comprobamos si algún campo está sin rellenar. En ese caso mostraremos un mensaje de error.
    for (let field in newSong) {
      if (!newSong[field]) {
        this.props.displayAddNewSongError();
        return;
      }
    }

    // Si los campos están correctos añadimos la cancion a nuestra lista
    this.props.onAddNewSong(newSong);
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(SongForm);