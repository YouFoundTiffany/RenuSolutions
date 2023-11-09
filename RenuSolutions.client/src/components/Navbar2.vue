<!-- NAVBAR 2 -->
<template>
  <section class="d-flex justify-content-center m-0 p-1">
    <nav class="navbar bg-transparent navbar-expand-sm navbar-light navbar-expand-sm pe-2">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex align-items-center">
          <img src="src/assets/img/RenuSolutionsDigitalLabLogoandNameGLOW3.svg" alt="Renu Solutions Digital Lab"
            height="45" class="" title="Home">
          <!-- <img src="src\assets\img\RenuLogoMockUp.png" alt="Renu Name" height="45" class="" title="Home">
          <img src="src\assets\img\RenuNameMidnight4.svg" alt="Renu Name" height="45" class="" title="Home"> -->
        </div>
      </router-link>
      <button class="navbar-toggler d-lg-none pe-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText2"
        aria-controls="navbarText2" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarText2">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
          <li>
            <router-link :to="{ name: 'About' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              About
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Services' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              Services
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Portfolio' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              Portfolio
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Blog' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              Blog
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

  <!-- LOGIN COMPONENT HERE -->
  <!-- <Login /> -->
</template>

<script>
import RenuSolutionsLogo from '@/assets/img/RenuSolutionsDigitalLabLogoandNameGLOW3.svg';

// import Login from './Login.vue';
export default {
  setup() {
    return {
      logo: RenuSolutionsLogo,
    }
  },
  // components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
  color: var(--Maritime);
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 3px solid var(--Maritime);
  border-bottom-left-radius: 1.5px;
  border-bottom-right-radius: 1.5px;

}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
