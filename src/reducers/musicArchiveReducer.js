import {
  RENDER_SONGS_TABLE,
  RESET_NEW_SONG_FORM,
  MODIFY_NEW_SONG,
  DISPLAY_ADD_NEW_SONG_SUCCESS,
  DISPLAY_ADD_NEW_SONG_ERROR
} from "../actions/musicArchiveAction";

const initialState = {
  songs: [],  // Lista de canciones que se mostrará en una tabla
  newSong: {  // Nueva canción a añadir a la lista
    title: '',
    artist: '',
    album: '',
    genre: '',
    duration: '',
    rating: '',
  },
  addNewSongSuccess: false, // true si el proceso de añadir una nueva canción ha finalizado con éxito 
  addNewSongError: false    // true si hay un error al añadir una nueva canción
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case RENDER_SONGS_TABLE:
      return {
          ...state,
          songs: action.songs,
      };

    case RESET_NEW_SONG_FORM:
      return {
        ...state,
        newSong: { title: '', artist: '', album: '', genre: '', duration: '', rating: '' },
        addNewSongSuccess: false,
        addNewSongError: false
      };
    case MODIFY_NEW_SONG:
      let newSong = state.newSong;
      newSong[action.fieldName] = action.fieldValue;

      return {
        ...state,
        newSong: newSong
      };

    case DISPLAY_ADD_NEW_SONG_SUCCESS:
        return {
          ...state,
          songs: [
            ...state.songs,
            action.newSong
          ],
          newSong: { title: '', artist: '', album: '', genre: '', duration: '', rating: '' },
          addNewSongSuccess: true,
          addNewSongError: false
        };

    case DISPLAY_ADD_NEW_SONG_ERROR:
      return {
        ...state,
        addNewSongError: true
      };
    
    default:
      return state;

  }
};

export default reducer;