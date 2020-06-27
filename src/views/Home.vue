<template>
	<div class="home">
		<PopularMoviesList />
	</div>
</template>

<script>
import PopularMoviesList from "../components/PopularMoviesList.vue";

export default {
	name: "Home",
	components: { PopularMoviesList }
};
</script>

<style></style>
