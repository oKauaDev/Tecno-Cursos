<template>
  <div id="navbar">
    <router-link class="link" to="/">TecnoCursos</router-link>
    <router-link class="link-mobile" to="/">TC</router-link>
    <ul>
      <li>
        <router-link to="/cursos">Cursos</router-link>
      </li>
      <li>
        <router-link to="/contato">Contato</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MyNavBar",
};
</script>
<style scoped>
#navbar {
  padding: 16px 15%;
  background: #01112e;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#navbar ul {
  list-style: none;
  display: flex;
  align-items: center;
}

#navbar ul a {
  padding: 10px 20px;
  text-decoration: none;
  color: #d3e2fe;
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: uppercase;
  font-variant: small-caps;
  font-weight: 500;
}

#navbar .link {
  color: #d3e2fe;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: 500;
}

.link-mobile {
  display: none;
}

@media (max-width: 726px) {
  #navbar {
    padding: 16px 5%;
  }

  .link-mobile {
    display: block;
    color: #d3e2fe;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 500;
  }

  .link {
    display: none;
  }
}
</style>
