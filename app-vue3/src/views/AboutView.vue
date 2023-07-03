<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      来自基座的数据: {{ data.appName }}
    </div>
  </div>
</template>
<script setup>
  import { bus } from "wujie";
  const data = window.$wujie?.props
  bus.$on('hello:app1',(arg1)=> {
    alert("来自基座的数据:",arg1)
  })
</script>
<style>

</style>
