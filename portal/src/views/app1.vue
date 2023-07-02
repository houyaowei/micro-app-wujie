<template>
	<div>
		<WujieVue width="100%" height="100%" name="app1" :url="appUrl"></WujieVue>
	</div>
</template>

<script setup>
	import pkg from "../../package.json"

	console.log("app1.vue:", pkg.name)
	
	const appUrl = "//localhost:3101"
</script>


<style></style>
