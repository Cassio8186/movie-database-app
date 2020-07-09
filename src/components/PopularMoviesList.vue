<template>
	<div>
		<MovieList :movies="popularMovies" @loadMore="loadMore" />
	</div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MovieList from "./MovieList.vue";
export default {
	name: "PopularMoviesList",
	computed: {
		...mapState("movieData", ["popularMoviesData", "popularMovies"])
	},
	components: { MovieList },

	methods: {
		...mapActions("movieData", ["getMovieData", "getPopularMovies"]),
		async loadMore() {
			const nextPage = this.popularMoviesData.nextPage;
			await this.getPopularMovies(nextPage);
		}
	}
};
</script>

<style></style>
