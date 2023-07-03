<script setup>
import { computed } from "vue"
import { RouterView , useRouter} from 'vue-router'
import { useAppStore }  from '@/stores/app'
//第二种通信方式，event-bus
import WujieVue from "wujie-vue3";
const { bus } = WujieVue;
const router = useRouter()
const store = useAppStore()

const appName = computed(()=> store.getAppName())

function goToPage(url) {
  //TODO:  startApp和pushState加载应用都有问题.  startApp不能加载很奇怪
  // startApp({
  //   name: url
  // })
  // history.pushState(null, '', url)
  router.replace(url)
  
  store.setAppName(url)
}
bus.$on('property:change', (arg1,arg2)=> {
  console.log('来自子应用的:', arg1, arg2)
})

/**
 * 注意：子应用加载才能收到消息,如果路由没激活也收不到
 */
function sendMessage() {
  bus.$emit('app:unload', appName)
}
function sendApp1Message(){
  bus.$emit('hello:app1', appName)
}
</script>

<template>
  <header>
    <div style="color: hsla(160, 100%, 37%, 1); cursor: pointer; margin-right: 40px;" @click="goToPage('app1')">    切到App1(Vue3)</div>
    <!-- <router-link to="/app1">切到App1(Vue3)</router-link>
    <router-link to="/app2">切到App2(Vue3+ts)</router-link> -->
    <div style="color: hsla(160, 100%, 37%, 1);cursor: pointer; margin-right: 40px;" @click="goToPage('app2')">切到App2(Vue3+ts)</div>
    <div style="color: hsla(160, 100%, 37%, 1);cursor: pointer; " @click="goToPage('/react')">切到App3(React)</div> 
    <div style="float: right;"> 当前App: <span style="color: red">{{ appName }}</span></div>
    <div>
      <button @click="sendApp1Message">点击给已加载的App1发消息</button>
      <button @click="sendMessage">点击给未加载的App2发消息</button>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
  }

  nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
  }

  nav a.router-link-exact-active {
    color: var(--color-text);
  }

  nav a.router-link-exact-active:hover {
    background-color: transparent;
  }

  nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
  }

  nav a:first-of-type {
    border: 0;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      justify-content: space-around;
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }

    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
      margin-top: 1rem;
    }
  }
</style>
