const urlGetMovies = 'http://127.0.0.1:8000/api/list_all_movies';
const urlPostMovies = 'http://127.0.0.1:8000/api/insert_movie';
const urlPutMovies = 'http://127.0.0.1:8000/api/update_movie';
const urlDeleteMovies = 'http://127.0.0.1:8000/api/delete_movie';

function* getMoviesFromApi() {
    const response = yield fetch(urlGetMovies, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    });
    const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    return movies;
}

function* insertNewMovieFromApi(newMovie) {
    const response = yield fetch(urlPostMovies, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: newMovie.name,
            releaseYear: newMovie.releaseYear,
        }),
    });
    // const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    // return movies;
    console.log(`response = ${JSON.stringify(response)}`);
    return yield (response.status === 200);
}

function* updateMovieFromApi(updatedMovie) {
    const urlLink = `${urlPutMovies}/${updatedMovie.id.toString()}`;
    const response = yield fetch(urlLink, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: updatedMovie.name,
            releaseYear: updatedMovie.releaseYear,
        }),
    });
    // const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    // return movies;
    console.log(`response = ${JSON.stringify(response)}`);
    return yield(response.status === 200);
}

function* deleteMovieFromApi(deletedMovieId) {
    const urlLink = `${urlDeleteMovies}/${deletedMovieId}`;
    const response = yield fetch(urlLink, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
        }),
    });
    // const movies = yield response.status === 200 ? JSON.parse(response._bodyInit) : []
    // return movies;
    console.log(`response = ${JSON.stringify(response)}`);
    return yield(response.status === 200);
}
export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updateMovieFromApi,
    deleteMovieFromApi
};