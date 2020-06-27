<template>
	<div
		class="movie-list"
		v-infinite-scroll="loadMore"
		infinite-scroll-disabled="busy"
		infinite-scroll-distance="10"
	>
		<b-container
			class="d-flex flex-wrap align-content-stretch justify-content-xl-between justify-content-around"
		>
			<MovieListItem
				class="border d-inline-flex flex-wrap flex-column mb-3"
				:movie="movie"
				v-for="movie in movies"
				:key="movie.id"
			/>
		</b-container>
	</div>
</template>

<script>
import MovieListItem from "./MovieListItem.vue";
export default {
	name: "MovieList",
	props: ["movies"],
	components: { MovieListItem },
	methods: {
		loadMore() {
			this.$emit("loadMore");
		}
	}
};
</script>

<style>
.border {
	border: 1px black solid;
	padding: 5px;
}
</style>
