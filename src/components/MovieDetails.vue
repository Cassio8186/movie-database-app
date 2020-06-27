<template>
	<div
		class="movie-details container p-5"
		style="background-repeat: no-repeat;background-size: cover;"
		:style="
			movie.backdrop_path != null
				? `background:url(https://image.tmdb.org/t/p/original/${movie.backdrop_path});`
				: null
		"
	>
		<div class="row">
			<div class="col-lg-3 col-12 m-auto py-5 margin-5-auto">
				<img
					class="card-img-top movie-img"
					alt="TODO"
					v-if="movie.poster_path"
					:src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`"
				/>
				<ImageNotFound v-else :width="'100%'" :height="'350px'" />
			</div>
			<div class="col-lg-9 col-12 m-auto py-2 black-background text-white">
				<div class="card-body d-flex flex-column p-2">
					<h5 class="card-title">Titulo: {{ movie.title }}</h5>
					<p class="card-text">{{ movie.overview }}</p>
					<p class="card-text">Data de lançamento: {{ movie.release_date }}</p>

					<MovieGenres
						:movieGenresId="movie.genre_ids || movie.genres"
						:allMoviesGenres="genres"
						class="card-text mb-3"
					/>

					<MovieRating :rating="movie.vote_average" class="mt-auto" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import MovieRating from "./MovieRating.vue";
import MovieGenres from "./MovieGenres.vue";
import ImageNotFound from "./ImageNotFound.vue";
import { getMovieData } from "../api/moviedb";
export default {
	name: "MovieDetails",
	props: ["movieCache", "genres"],
	data: () => ({
		movie: {},
		movieData: {}
	}),
	components: { MovieRating, MovieGenres, ImageNotFound },
	created() {
		if (this.movieCache) {
			this.movie = this.movieCache;
		}
		const id = this.$route.params.id;
		const config = { movieId: id };
		getMovieData(config).then(movieData => {
			this.movie = movieData;
		});
	}
};
</script>

<style>
.movie-img {
	width: 100%;
	height: auto;
}
.black-background {
	background-color: rgba(0, 0, 0, 0.808);
}
</style>
