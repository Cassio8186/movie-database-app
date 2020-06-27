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
	data: () => ({
		loadingMore: false
	}),
	methods: {
		...mapActions("movieData", ["getMovieData", "getPopularMovies"]),
		async loadMore() {
			if (
				this.loadingMore == false &&
				this.popularMoviesData.page !== undefined &&
				this.popularMoviesData.nextPage !== 1
			) {
				this.loadingMore = true;
				const nextPage = this.popularMoviesData.nextPage;
				await this.getPopularMovies(nextPage);
				this.loadingMore = false;
			}
		}
	},
	created() {
		this.getMovieData();
	}
};
</script>

<style></style>
