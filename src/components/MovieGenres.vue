<template>
	<div class="movie-genres" v-if="movieGenresId && allMoviesGenres">
		Generos:
		<span v-for="(genre, key) in genres" :key="genre.id">
			<span v-if="key !== 0">, </span>
			<span>{{ genre.name }}</span>
		</span>
	</div>
</template>

<script>
export default {
	name: "MovieGenres",
	props: ["movieGenresId", "allMoviesGenres"],
	computed: {
		genres() {
			const movieGenresId = this.movieGenresId;
			const allMoviesGenres = this.allMoviesGenres;

			return allMoviesGenres.filter(genre => {
				return movieGenresId.some(movieGenre => {
					if (movieGenre.id) {
						return genre.id == movieGenre.id;
					} else {
						return genre.id == movieGenre;
					}
				});
			});
		}
	}
};
</script>

<style></style>
