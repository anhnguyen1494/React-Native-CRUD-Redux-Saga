import { ADD_MOVIE, FETCH_MOVIES, FETCH_SUCCEEDED, FETCH_FAILED, UPDATE_MOVIE, UPDATE_SUCCEEDED, DELETE_SUCCEEDED, DELETE_MOVIE } from './actionTypes';

export const fetchMoviesAction = (sort) => {
    return {
        type: FETCH_MOVIES,
        sort
    }
}

export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        //newMovie: newMovie
        newMovie
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

//Update existing movie
export const updateItemAction = (updatedMovie) => {
    return {
        type: UPDATE_MOVIE,
        updatedMovie
    }
}
//Action sent by Redux saga
export const updateItemSuccessAction = (updatedMovie) => {
    return {
        type: UPDATE_SUCCEEDED,
        updatedMovie
    }
}
//delete existing movie
export const deleteItemAction = (deletedMovieId) => {
    return {
        type: DELETE_MOVIE,
        deletedMovieId
    }
}
export const deleteItemSuccessAction = (deletedMovieId) => {
    return {
        type: DELETE_SUCCEEDED,
        deletedMovieId
    }
}

