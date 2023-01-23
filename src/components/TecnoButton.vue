<template>
  <div>
    <router-link class="button" v-if="to" :to="to"><slot /></router-link>
    <button v-else class="button"><slot /></button>
  </div>
</template>
<script>
export default {
  name: "TecnoButton",
  props: {
    to: {
      type: String,
      default: null,
    },

    action: {
      type: String,
      default: null,
    },
  },
  created() {
    console.log(this.action);
  },
};
</script>
<style scoped>
.button {
  background: #03389a;
  padding: 10px 20px;
  border: none;
  color: #f0f5ff;
  text-transform: uppercase;
  font-variant: small-caps;
  border-radius: 5px;
  font-weight: 500;
  cursor: pointer;
  display: block;
  width: max-content;
  text-decoration: none;
}
</style>
