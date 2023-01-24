<template>
  <div id="app">
    <transition mode="out-in" appear>
      <div id="fullapp" v-if="!loading">
        <h1>Sobre o TecnoCursos</h1>
        <p>{{ apiData.descricao }}</p>
        <TecnoButton to="/cursos">Cursos</TecnoButton>
        <h2>Avaliações</h2>
        <ul>
          <li v-for="avaliacao in apiData.avaliacoes" :key="avaliacao.nome">
            <h4>{{ avaliacao.nome }}</h4>
            <p>{{ avaliacao.descricao }}</p>
          </li>
        </ul>
      </div>
      <LoadingAnimation v-else></LoadingAnimation>
    </transition>
  </div>
</template>
<script>
import TecnoButton from "@/components/TecnoButton.vue";
import LoadingAnimation from "@/components/LoadingAnimation.vue";

export default {
  components: {
    TecnoButton,
    LoadingAnimation,
  },
  data() {
    return {
      apiData: {},
      loading: true,
    };
  },
  methods: {
    fetchAPI() {
      this.loading = true;
      setTimeout(() => {
        fetch("http://api.kauadev.xyz/tecnocursos/home")
          .then((r) => r.json())
          .then((r) => {
            this.apiData = r;
            this.loading = false;
          });
      }, 500);
    },
  },
  created() {
    this.fetchAPI();
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

#app h2 {
  font-size: 2.5rem;
  margin-top: 48px;
}

#app ul {
  list-style: none;
}

#app li {
  margin-top: 32px;
}

#app ul h4 {
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 1.2rem;
}

#app ul p {
  max-width: 400px;
  font-size: 1rem;
  margin-left: 16px;
}

#app ul p::before {
  content: "↳";
  margin-right: 8px;
}
</style>
