<script setup>
  const data = window.$wujie?.props
</script>

<template>
  <div>
      子页面,来自基座的数据 <span style="color: red;">{{ data.appName }}</span>  
  </div>
</template>

<style scoped>
  .home-container {
    font-size: 16px;
  }
</style>