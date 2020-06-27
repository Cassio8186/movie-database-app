<template>
	<div class="container">
		<MovieDetails :movieCache="movie" :genres="genres" />
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MovieDetails from "../components/MovieDetails.vue";
export default {
	name: "Movie",
	components: { MovieDetails },
	computed: {
		id() {
			return this.$route.params.id;
		},
		...mapState("movieData", ["popularMovies", "genres"]),
		movie() {
			const movieData = this.popularMovies;
			if (movieData) {
				return movieData.find(movie => {
					return movie.id == this.id;
				});
			} else {
				return false;
			}
		}
	},
	methods: { ...mapActions("movieData", ["getMoviesGenres"]) },
	created() {
		if (this.genres.length == 0) {
			this.getMoviesGenres();
		}
	}
};
</script>

<style></style>
