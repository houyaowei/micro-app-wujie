<script setup>
  import { bus } from "wujie";
  import subPage from "./subPage.vue"
  const pageName = "homeview"
  function sendMsg() {
    bus.$emit('property:change', 'homeview.vue',pageName)
  }

  function jumpTo(){
    window.$wujie?.props.jump({ path: "/app2", query: { subRouter: "/dialog" } });
    // window.$wujie?.bus.$emit("routeChange", "/app2/dialog");
  }
</script>

<template>
  <div>
    <h1>
        this is home page  
    </h1>
    <button @click="sendMsg">点击给基座发消息</button>
    <sub-page></sub-page>
    <button @click="jumpTo">点击跳转到app2</button>
  </div>
  
</template>

<style scoped>
  .home-container {
    font-size: 16px;
  }
</style>