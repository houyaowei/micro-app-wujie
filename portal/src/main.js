import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupApp, preloadApp } from "wujie"
import WujieVue from 'wujie-vue3';
import App from './App.vue'
import router from './router'
import './assets/main.css'

//子应用配置
import appEntry from "./wujie-config/app.config"
import lifecycles from './wujie-config/lifecycle';


appEntry.apps.forEach((item)=> {
	setupApp({
		name: item.name,
		url: item.enty,
		exec: true, //默认执行
		sync: true,
		alive: true, //默认保活
		...lifecycles
	})
})

const app = createApp(App)

app.use(createPinia()).use(WujieVue)
app.use(router)

app.mount('#app')

//启动预加载
if(import.meta.env.VITE_MICRO_APP_PREFETCH){
  apps.forEach(item => {
    const { name , entry } = item
    preloadApp({
      name,
      url: ''
    })
  })
}
