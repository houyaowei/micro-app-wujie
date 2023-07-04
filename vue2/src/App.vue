<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">首页</router-link> | <router-link to="/dialog">弹窗</router-link> |
      <router-link to="/location">路由</router-link> | <router-link to="/communication">通信</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { bus } from "wujie"
export default {
  watch: {
    "$route.params.path": {
      handler: function () {
        console.log("location:", decodeURIComponent(parent.location.href))
        // wujieVue.bus.$emit("vue3-router-change", `/${this.$route.params.path}`);
      },
      immediate: true,
    },
  },
  mounted: function() {
    console.log("vue2 location:", decodeURIComponent(parent.location.href))
    const params = new URL(decodeURIComponent(parent.location.href)).searchParams;
    const subRouter = params.get("subRouter")
    console.log("subRouter:",subRouter)
    this.$router.push(subRouter)



    bus.$on('app:unload',(arg1)=> {
      alert("来自基座的数据:",arg1)
    })
  },
  methods: {

  }
};
</script>
