import { getPopularMovies, getMoviesGenres } from "../../../api/moviedb";

export default {
	setError({ commit }) {
		commit("setError", true);
		commit("setErrorMessage", "Erro");
	},
	getPopularMovies({ commit, dispatch, state }, page) {
		if (state.loadingMoreMovies == false) {
			commit("setLoadingMoreMovies", true);
			getPopularMovies({ page })
				.then(popularMovies => {
					const { page, results, total_pages, total_results } = popularMovies;
					commit("setPopularMovies", results);
					commit("setPopularMoviesData", {
						page,
						total_pages,
						total_results,
						nextPage: page + 1
					});
					commit("setLoadingMoreMovies", false);
				})
				.catch(() => {
					dispatch("setError");
				});
		}
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
