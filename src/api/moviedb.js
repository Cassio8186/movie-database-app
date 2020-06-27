import { oneMonthAgoDate, today } from "./util";
import { v3Client } from "./config/apiClients";

/**
 * @function getPopularMovies
 * @param {Object} config
 * @param {number} config.movieId
 * @param {string} config.region
 * @returns {Promise}
 */

const getMovieData = async config => {
	return new Promise((resolve, reject) => {
		const { region, movieId } = config || {};
		v3Client.movie
			.details(movieId, {
				language: "pt-br",
				region
			})
			.then(response => resolve(response))
			.catch(error => reject(error));
	});
};
const getPopularMovies = async config => {
	return new Promise((resolve, reject) => {
		const { page, region } = config || {};
		v3Client.movie
			.popular({
				language: "pt-br",
				page,
				region
			})
			.then(response => resolve(response))
			.catch(error => reject(error));
	});
};

/**
 *
 * @param {*} config
 * @returns {Promise}
 */
const getLastestMovies = async config => {
	return new Promise((resolve, reject) => {
		const { page, region } = config || {};
		v3Client.discover
			.movie({
				sort_by: "release_date.desc",
				language: "pt-br",
				page,
				region,
				"primary_release_date.lte": today(),
				"primary_release_date.gte": oneMonthAgoDate()
			})
			.then(response => resolve(response))
			.catch(error => reject(error));
	});
};
/**
 * @function getMoviesGenres
 * @returns {Promise}
 */
const getMoviesGenres = async () => {
	return new Promise((resolve, reject) => {
		v3Client.genre
			.movieList({ language: "pt-br" })
			.then(response => resolve(response))
			.catch(error => reject(error));
	});
};
export { getPopularMovies, getMoviesGenres, getLastestMovies, getMovieData };
