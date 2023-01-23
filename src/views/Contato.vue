<template>
  <div id="app">
    <div v-if="!loading">
      <h1>Contato</h1>
      <p>{{ contatoInfo.descricao }}</p>
      <ul>
        <li v-for="(contato, metodo) in contatoInfo.contato" :key="metodo">
          <span>{{ metodo }}</span> {{ contato }}
        </li>
      </ul>
    </div>
    <LoadingAnimation v-else />
  </div>
</template>
<script>
import LoadingAnimation from "@/components/LoadingAnimation.vue";

export default {
  name: "Contato",
  components: {
    LoadingAnimation,
  },
  data() {
    return {
      contatoInfo: {},
      loading: true,
    };
  },
  methods: {
    fetchContato() {
      this.loading = true;
      setTimeout(() => {
        fetch("http://api.kauadev.xyz/tecnocursos/contato")
          .then((r) => r.json())
          .then((r) => {
            this.loading = false;
            this.contatoInfo = r;
          });
      }, 500);
    },
  },
  created() {
    this.fetchContato();
  },
};
</script>
<style scoped>
#app {
  padding: 0 15%;
}

#app h1 {
  margin-top: 100px;
  margin-bottom: 16px;
  font-size: 2.5rem;
}

#app p {
  margin-bottom: 16px;
}

#app ul {
  list-style: none;
}

#app li {
  margin: 8px 0;
}

#app li span {
  font-weight: 600;
  text-transform: capitalize;
}

#app li span::after {
  content: ": ";
}
</style>
