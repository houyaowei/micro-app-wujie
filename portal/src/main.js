import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupApp,startApp, preloadApp } from "wujie"
import WujieVue from 'wujie-vue3';

import App from './App.vue'
import router from './router'
import lifecycles from './lifecycle';

import './assets/main.css'


const apps = [
	{
		name: 'app1',
		url: '//localhost:3101'
	},
	{
		name: 'app2',
		url: '//localhost:3102'
	}
]

apps.forEach((item)=> {
	setupApp({
		name: item.name,
		url: item.url,
		exec: true,
		sync: true,
		alive: true,
		...lifecycles
	})
})

const app = createApp(App)

app.use(createPinia()).use(WujieVue)
app.use(router)

app.mount('#app')

preloadApp({
	name: 'app1',
	url: ''
})
preloadApp({
	name: 'app2',
	url: ''
})