
import { fork } from 'redux-saga/effects';
import { watchFetchMovies, watchUpdateMovie, watchDeleteMovie } from './movieSagas';

import { watchAddNewMovie } from './movieSagas';

export default function* rootSaga() {
    yield [
        fork(watchFetchMovies),
        fork(watchAddNewMovie),
        fork(watchUpdateMovie),
        fork(watchDeleteMovie)
    ];
}