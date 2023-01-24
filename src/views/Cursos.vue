<template>
  <div id="app">
    <transition mode="out-in" appear>
      <div id="fullapp" v-if="!loading">
        <div>
          <h1>Nossos Cursos</h1>
          <p>{{ apiData.descricao }}</p>
        </div>
        <div>
          <div
            v-for="curso in apiData.cursos"
            :key="curso.id"
            class="curso"
            @click="redirect(`/curso/${curso.id}`)"
          >
            <h1>{{ curso.nome }} - {{ curso.totalAulas }} Aulas | {{ curso.horas }} Horas</h1>
            <p>{{ curso.descricao }}</p>
          </div>
        </div>
      </div>
      <LoadingAnimation v-else />
    </transition>
  </div>
</template>
<script>
import LoadingAnimation from "@/components/LoadingAnimation.vue";

export default {
  name: "Cursos",
  components: {
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
        fetch("http://api.kauadev.xyz/tecnocursos/cursos")
          .then((r) => r.json())
          .then((r) => {
            this.apiData = r;
            this.loading = false;
          });
      }, 500);
    },
    redirect(from) {
      this.$router.push(from);
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
  max-width: 400px;
}

#fullapp {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

#fullapp .curso {
  cursor: pointer;
  margin-bottom: 32px;
}

#fullapp .curso h1 {
  font-size: 1.5rem;
}

@media (max-width: 726px) {
  #app {
    padding: 0 16px;
  }

  #fullapp {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  #app p {
    margin: 0 auto;
    margin-bottom: 16px;
    max-width: 400px;
  }
}
</style>
