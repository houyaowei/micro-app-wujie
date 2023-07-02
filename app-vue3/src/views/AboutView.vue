<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      来自基座的数据: {{ data.appName }}
    </div>
  </div>
</template>
<script setup>
  const data = window.$wujie?.props
</script>
<style>

</style>
