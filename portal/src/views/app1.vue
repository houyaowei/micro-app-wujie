<template>
	<div>
		<WujieVue width="100%" height="100%" style="padding-left: 6rem;padding-right: 2rem;" :name="appName" :props="{appName:store.getAppName()}" :url="appUrl"></WujieVue>
	</div>
</template>

<script setup>
	import { ref } from "vue"
	import { getCurrentAppEntry } from "@/utils/app"
	import { useAppStore }  from '@/stores/app'
	const store = useAppStore()
	const appUrl = ref("")
	const appName= "app1"
	appUrl.value = getCurrentAppEntry(appName)

	//子应用props传参


</script>


<style></style>
