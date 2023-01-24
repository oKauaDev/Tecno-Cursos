<template>
  <div id="app">
    <transition mode="out-in" appear>
      <div id="fullapp" v-if="!loadingPage">
        <div class="cursoInfo">
          <h1>{{ cursoData.nome }}</h1>
          <p>{{ cursoData.descricao }}</p>
          <h1>Aulas</h1>
          <button
            v-for="aula in cursoData.aulas"
            :key="aula.id"
            @click="toAula(cursoData.id, aula.id)"
            :class="selectAula === aula.id ? 'selected' : ''"
          >
            {{ aula.nome }}
          </button>
        </div>
        <div v-if="loadingAula !== null">
          <LoadingAnimation v-if="loadingAula === true" />
          <div v-else class="aulaInfo">
            <h1>{{ aulaInfo.nome }}</h1>
            <iframe :title="aulaInfo.nome" :src="getUrl(aulaInfo.youtube)"> </iframe>
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
  name: "Aula",
  components: {
    LoadingAnimation,
  },
  data() {
    return {
      curso: "",
      cursoData: {},
      selectAula: "",
      aulaInfo: {},
      loadingAula: null,
      loadingPage: true,
    };
  },
  methods: {
    fetchCurso(curso) {
      this.loadingPage = true;
      setTimeout(() => {
        fetch(`http://api.kauadev.xyz/tecnocursos/curso/${curso}`)
          .then((r) => r.json())
          .then((r) => {
            this.cursoData = r;
            this.loadingPage = false;
          });
      }, 500);
    },
    fetchAula(aula) {
      this.loadingAula = true;
      setTimeout(() => {
        fetch(`http://api.kauadev.xyz/tecnocursos/aula/${aula}`)
          .then((r) => r.json())
          .then((r) => {
            this.aulaInfo = r;
            this.loadingAula = false;
          });
      }, 500);
    },
    toAula(curso, aula) {
      console.log(curso, aula);
      this.$router.push(`/curso/${curso}/${aula}`);
      this.selectAula = aula;
      this.fetchAula(aula);
    },
    getUrl(id) {
      return `https://www.youtube.com/embed/${id}`;
    },
  },
  created() {
    this.curso = this.$route.params.curso;
    this.selectAula = this.$route.params.aula;
    this.fetchCurso(this.curso);
    if (this.selectAula) {
      this.fetchAula(this.selectAula);
    }
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

#fullapp button {
  background: #fff;
  width: 80%;
  text-align: left;
  border: none;
  padding: 20px 30px;
  display: block;
  font-size: 1rem;
  margin: 16px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  font-weight: 500;
  border-radius: 5px;
  transition: background 0.3s, transform 0.3s;
}

#fullapp button:hover {
  background: #115fee;
  color: #fff;
}

#fullapp button.selected {
  background: #115fee;
  color: #fff;
  transform: scale(1.1);
}

iframe {
  max-width: 400px;
  width: 100%;
  height: 80vh;
  max-height: 300px;
}

@media (max-width: 900px) {
  #fullapp {
    grid-template-columns: 1fr;
    text-align: center;
  }

  #app p {
    margin: 0 auto;
    margin-bottom: 16px;
  }

  #fullapp button {
    width: max-content;
    text-align: center;
    margin: 16px auto;
  }
}
</style>
