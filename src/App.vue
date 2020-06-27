<template>
	<div id="app">
		<div id="nav" class="mb-5 pb-3">
			<div>
				<b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
					<b-navbar-brand to="/">Movie Database</b-navbar-brand>
					<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
					<b-collapse id="nav-collapse" is-nav>
						<b-navbar-nav></b-navbar-nav>
					</b-collapse>
				</b-navbar>
			</div>
		</div>
		<router-view />
	</div>
</template>
<script>
export default {
	name: "App"
};
</script>
<style>
body,
.dark-bg {
	background: rgb(0, 0, 0) !important;
}
</style>
