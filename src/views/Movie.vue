<template>
	<div class="container">
		<MovieDetails :movieCache="movie" :genres="genres" />
	</div>
</template>

<script>
import { mapState } from "vuex";
import MovieDetails from "../components/MovieDetails.vue";

export default {
	name: "Movie",
	components: { MovieDetails },
	computed: {
		...mapState("movieData", ["genres"]),
		id() {
			return this.$route.params.id;
		},
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
	}
};
</script>

<style></style>
