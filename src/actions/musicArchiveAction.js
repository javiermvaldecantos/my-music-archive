export const LOAD_SONGS = "LOAD_SONGS";
export const RENDER_SONGS_TABLE = "RENDER_SONGS_TABLE";
export const RESET_NEW_SONG_FORM = "RENDER_NEW_SONG_FORM";
export const MODIFY_NEW_SONG = "MODIFY_NEW_SONG";
export const ADD_NEW_SONG = "ADD_NEW_SONG";
export const DISPLAY_ADD_NEW_SONG_SUCCESS = "DISPLAY_ADD_NEW_SONG_SUCCESS";
export const DISPLAY_ADD_NEW_SONG_ERROR = "DISPLAY_ADD_NEW_SONG_ERROR";

export const loadSongs = () => ({
  type: LOAD_SONGS
});

export const resetNewSongForm = () => ({
  type: RESET_NEW_SONG_FORM
});

export const modifyNewSong = (fieldName, fieldValue) => ({
  type: MODIFY_NEW_SONG,
  fieldName: fieldName,
  fieldValue: fieldValue
});

export const addNewSong = (newSong) => ({
  type: ADD_NEW_SONG,
  newSong: newSong
});

export const displayAddNewSongError = () => ({
  type: DISPLAY_ADD_NEW_SONG_ERROR
})