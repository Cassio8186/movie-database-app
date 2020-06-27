import { getPopularMovies, getMoviesGenres } from "../../../api/moviedb";

export default {
	setError({ commit }) {
		commit("setError", true);
		commit("setErrorMessage", "Erro");
	},
	getMovieData({ dispatch, state }) {
		dispatch("getPopularMovies", state.popularMoviesData.nextPage);
		dispatch("getMoviesGenres");
	},
	getPopularMovies({ commit, dispatch }, page) {
		getPopularMovies({ page })
			.then(popularMovies => {
				const { page, results, total_pages, total_results } = popularMovies;
				commit("setPopularMoviesData", {
					page,
					total_pages,
					total_results,
					nextPage: page + 1
				});
				commit("setPopularMovies", results);
			})
			.catch(() => {
				dispatch("setError");
			});
	},
	getMoviesGenres({ commit, dispatch }) {
		getMoviesGenres()
			.then(result => {
				commit("setGenres", result.genres);
			})
			.catch(() => {
				dispatch("setError");
			});
	}
};
