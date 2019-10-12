<template>
  <div id="app">
    <NavBar  v-if="!['dashboard'].includes($route.name)" />
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from "@/components/navbar";
  export default {
    name: "App",
    components: {
        NavBar
    }
  };
</script>

<style></style>
