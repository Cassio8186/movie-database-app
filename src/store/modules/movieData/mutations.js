export default {
	setPopularMoviesData(state, popularMovies) {
		state.popularMoviesData = popularMovies;
	},
	setPopularMovies(state, popularMovies) {
		state.popularMovies = state.popularMovies.concat(popularMovies);
	},
	setGenres(state, genres) {
		state.genres = genres;
	},
	setError(state, error) {
		state.error = error;
	},
	setErrorMessage(state, errorMessage) {
		state.errorMessage = errorMessage;
	}
};
