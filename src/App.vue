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

<style>
.v-enter-active {
  transition: 0.3s;
}

.v-enter-from {
  transform: translate3d(-100px, 0px, 0px);
}
</style>
