<template>
	<div class="card movie-item p-2 dark-bg text-white">
		<b-link :to="`/movie/${movie.id}`">
			<img
				class="card-img-top movie-img"
				alt="TODO"
				v-if="movie.poster_path"
				:src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
			/>
			<ImageNotFound v-else :width="'auto'" :height="'400px'" />
		</b-link>

		<div class="card-body d-flex flex-column p-2">
			<h5 class="card-title mt-auto">{{ movie.title }}</h5>

			<p class="card-text">Data de lançamento: {{ movie.release_date }}</p>
			<MovieGenres
				:movieGenresId="this.movie.genre_ids"
				:allMoviesGenres="this.genres"
				class="card-text mb-3"
			/>

			<MovieRating :rating="this.movie.vote_average" />

			<b-link :to="`/movie/${movie.id}`" class="btn btn-primary mt-3">
				Mais detalhes
			</b-link>
		</div>
	</div>
</template>

<script>
import MovieGenres from "./MovieGenres";
import MovieRating from "./MovieRating";
import ImageNotFound from "./ImageNotFound.vue";
import { mapState } from "vuex";
export default {
	name: "MovieListItem",
	props: ["movie"],
	components: { ImageNotFound, MovieRating, MovieGenres },
	computed: {
		...mapState("movieData", ["genres"])
	}
};
</script>

<style>
.movie-item {
	width: 32%;
}
.card-body {
	max-width: 100%;
	word-wrap: break-word;
}
.movie-img {
	width: 100%;
	height: auto;
}
@media (max-width: 990px) {
	.movie-item {
		width: 45%;
	}
}
@media (max-width: 768px) {
	.movie-item {
		width: 90%;
	}
}
</style>
