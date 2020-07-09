import { uniqBy } from "lodash";

export default {
	setPopularMoviesData(state, popularMovies) {
		state.popularMoviesData = popularMovies;
	},
	setPopularMovies(state, popularMovies) {
		const popularMoviesResult = state.popularMovies.concat(popularMovies);
		state.popularMovies = uniqBy(popularMoviesResult, "id");
	},
	setGenres(state, genres) {
		state.genres = genres;
	},
	setError(state, error) {
		state.error = error;
	},
	setErrorMessage(state, errorMessage) {
		state.errorMessage = errorMessage;
	},
	setLoadingMoreMovies(state, isLoading) {
		state.loadingMoreMovies = isLoading;
	}
};
