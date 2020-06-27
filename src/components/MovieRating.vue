<template>
	<div class="movie-rating" v-if="rating">
		<label for="rating-inline" class="mt-auto">Classificação:</label>
		<b-form-rating v-model="movieStars" readonly precision="2" />
		<p class="text-center">{{ movieStars }}/5</p>
	</div>
</template>

<script>
export default {
	name: "MovieRating",
	props: ["rating"],
	computed: {
		movieStars() {
			return (this.rating / 2).toPrecision(2);
		}
	}
};
</script>

<style></style>
