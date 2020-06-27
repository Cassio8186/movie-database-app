import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		name: "Movie",
		path: "/movie/:id",
		component: Movie
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
