import { all, call, put, takeEvery } from 'redux-saga/effects';
import {
  LOAD_SONGS,
  RENDER_SONGS_TABLE,
  ADD_NEW_SONG,
  DISPLAY_ADD_NEW_SONG_SUCCESS
} from '../actions/musicArchiveAction';

export function* fetchSongs() {
  const endpoint = '/api/songs';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_SONGS_TABLE, songs: data });
}

export function* loadSongs() {
  yield takeEvery(LOAD_SONGS, fetchSongs);
}

export function* postNewSong({type, newSong}) {
  const endpoint = '/api/new-song';
  const response = yield call(fetch, endpoint, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ newSong: newSong })
  });
  const data = yield response.json();
  yield put({ type: DISPLAY_ADD_NEW_SONG_SUCCESS, newSong: data });
}

export function* addNewSong(newSong) {
  yield takeEvery(ADD_NEW_SONG, postNewSong)
}

export default function* rootSaga() {
  yield all([loadSongs(), addNewSong()]);
}