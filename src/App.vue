<template>
  <div id="app">
    <MyNavBar />
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavBar from "./components/MyNavBar.vue";

export default {
  name: "App",
  components: {
    MyNavBar,
  },
};
</script>

<style></style>
