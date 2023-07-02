<script setup>
import { RouterLink, RouterView } from 'vue-router'
console.log("props from 基座：", window.$wujie?.props)
</script>

<template>
  <div style="display: flex;justify-content: space-around;">
    <header>
      <div class="wrapper">
        <h3>App1(Vue3)</h3>
        <nav>
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/about">关于</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
  
</template>

<style scoped>
  header {
    line-height: 1.5;
    max-height: 100vh;
  }

  nav {
    width: 100%;
    font-size: 16px;
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

</style>
