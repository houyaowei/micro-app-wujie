<script setup>
  import { bus } from "wujie";
  import subPage from "./subPage.vue"
  const pageName = "homeview"
  function sendMsg() {
    bus.$emit('property:change', 'homeview.vue',pageName)
  }
</script>

<template>
  <div>
    <h1>
        this is home page  
    </h1>
    <button @click="sendMsg">点击给基座发消息</button>
    <sub-page></sub-page>
  </div>
  
</template>

<style scoped>
  .home-container {
    font-size: 16px;
  }
</style>