//Redux
import { connect } from 'react-redux';
import MovieComponent from '../components/MovieComponent';

//Action
import { addMovieAction, fetchMoviesAction, fetchSuccessAction, fetchFailedAction, 
    updateItemAction, updateItemSuccessAction, deleteItemAction
} from '../actions';

const mapStateToProps = (state) => {
    return {
        movies: state.movieReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetchMovies: (sort) => {
            dispatch(fetchMoviesAction(sort));
        },
        onAddMovie: (newMovie) => {
            dispatch(addMovieAction(newMovie));
        },
        onUpdateItemAction: (updatedMovie) => {
            dispatch(updateItemAction(updatedMovie));
        },
        //Not necessary
        onUpdateItemSuccessAction: (updatedMovie) => {
            dispatch(updateItemSuccessAction(updatedMovie));
        },
        //delete a movie
        onDeleteItemAction: (deletedMovieId) => {
            dispatch(deleteItemAction(deletedMovieId));
        },
    }
}

const MovieContainer = connect(mapStateToProps,mapDispatchToProps)(MovieComponent);
export default MovieContainer;