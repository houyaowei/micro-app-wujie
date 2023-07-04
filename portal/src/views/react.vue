<template>
	<div>
		<WujieVue width="100%" height="100%" :name="appName" :url="appUrl" :sync="true"></WujieVue>
	</div>
</template>

<script setup>
	import { ref } from "vue"
	import { getCurrentAppEntry } from "@/utils/app"
	const appUrl = ref("")
	const appName= "react"
	appUrl.value = getCurrentAppEntry(appName)

</script>


<style></style>
