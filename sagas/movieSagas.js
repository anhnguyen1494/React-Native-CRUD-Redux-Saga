import { FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, ADD_MOVIE, UPDATE_SUCCEEDED, UPDATE_MOVIE, DELETE_SUCCEEDED, DELETE_MOVIE } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from './Api';

function* fetchMovies() {
    try {
        const receivedMovies = yield Api.getMoviesFromApi();   
        yield put({ type: FETCH_SUCCEEDED, receivedMovies: receivedMovies });
    } catch (error) {        
        yield put({ type: FETCH_FAILED, error });
    }
}
export function* watchFetchMovies() {
    yield takeLatest(FETCH_MOVIES, fetchMovies);
}
//add
function* addNewMovie(action) {
    try {
        const result = yield Api.insertNewMovieFromApi(action.newMovie);
        if(result == true){
            yield put({type: FETCH_MOVIES, sort: 'desc'});
        }
    } catch (error) {        
        // yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchAddNewMovie() {
    yield takeLatest(ADD_MOVIE, addNewMovie);
}
//edit
function* updateMovie(action) {
    try {
        const result = yield Api.updateMovieFromApi(action.updatedMovie);
        if(result == true){
            yield put({
                type: UPDATE_SUCCEEDED,
                updatedMovie : action.updatedMovie
            });
        }
    } catch (error) {        
        // yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchUpdateMovie() {
    yield takeLatest(UPDATE_MOVIE, updateMovie);
}
//delete
function* deleteMovie(action) {
    try {
        const result = yield Api.deleteMovieFromApi(action.deletedMovieId);
        if (result == true) {
            yield put({
                type: DELETE_SUCCEEDED,
                deletedMovieId: action.deletedMovieId
            });
        }
    } catch (error) {
        alert(error);
        // yield put({ type: FETCH_FAILED, error });
    }
}

export function* watchDeleteMovie() {
    yield takeLatest(DELETE_MOVIE, deleteMovie);
}