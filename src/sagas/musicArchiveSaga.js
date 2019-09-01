import { all, call, put, takeEvery } from 'redux-saga/effects';
import { LOAD_SONGS, RENDER_SONGS_TABLE } from '../actions/musicArchiveAction';

export function* fetchSongs() {
  const endpoint = '/api/songs';
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  yield put({ type: RENDER_SONGS_TABLE, songs: data });
}

export function* loadSongs() {
  yield takeEvery(LOAD_SONGS, fetchSongs);
}

export default function* rootSaga() {
  yield all([loadSongs()]);
}