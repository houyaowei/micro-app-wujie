import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter ,createWebHistory} from "vue-router"

import App from './App.vue'
import routes from './router'

import './assets/main.css'

if (window.__POWERED_BY_WUJIE__) {
  const basename = window.__POWERED_BY_WUJIE__ ? "app1" : "/";

  let instance;
  window.__WUJIE_MOUNT = (props) => {
    
    const router = createRouter({
      history: createWebHistory({
        base: basename
      }), 
      routes
    });
    instance = createApp(App);
    instance.use(createPinia());
    instance.use(router);

    instance.mount("#app1");
  };
  window.__WUJIE_UNMOUNT = () => {
    instance.unmount();
  };
  window.__WUJIE.mount();

} else {
  createApp(App).use(createPinia()).use(createRouter({ history: createWebHistory(
    {
      base: 'app1'
    }), routes })).mount("#app1");
}