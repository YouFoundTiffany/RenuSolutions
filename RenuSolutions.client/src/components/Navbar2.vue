<!-- NAVBAR 2 -->
<template>
  <section class="m-0 p-0 container-flex justify-content-around">

    <section class="m-0 p-0 d-flex align-items-center justify-content-around">
      <nav class="navbar bg-transparent navbar-expand-sm navbar-light navbar-expand-sm pe-2 m-0">
        <router-link class="navbar-brand mt-3 mb-0 mx-0" :to="{ name: 'Home' }">
          <div class="align-items-center justify-content-center renu-glow">
            <img :src="logo"
              alt="Renu Solutions Digital Lab Web Development rising phoenix in shades of navy blue to teal with ditigal artifacts in circle"
              height="95" width="377.44" style="max-width: 100%;" class="" title="Home">
          </div>
        </router-link>
        <button class="navbar-toggler d-lg-none pe-2" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarText2" aria-controls="navbarText2" aria-expanded="false"
          aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarText2">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <!-- <li>
            <router-link :to="{ name: 'About' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              About
            </router-link>
          </li> -->
            <li>
              <router-link :to="{ name: 'Services' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
                Services
              </router-link>
            </li>
            <!-- <li>
            <router-link :to="{ name: 'Portfolio' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              Portfolio
            </router-link>
          </li> -->
            <!-- <li>
            <router-link :to="{ name: 'Blog' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
              Blog
            </router-link>
          </li> -->
            <li>
              <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <router-link :to="{ name: 'Contact' }" v-if="$route.name !== 'Contact'"
        class="btn lighten-30 text-uppercase fw-bold text-Midnight">
        <button type="button"
          class="consult smol-txt-btn btn bg-Minty text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
          Free Consult</button>
      </router-link>
      <div v-else style="width: 11vw;"></div>

    </section>

    <!-- LOGIN COMPONENT HERE -->
    <!-- <Login /> -->
  </section>
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
.smol-txt-btn {
  padding-top: 10px;
  height: 35px !important;
  font-size: x-small !important;
  font-weight: 800 !important;
}

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

@media screen and (max-width: 768px) {
  .navbar-toggler {
    margin-left: 12%;
  }
}

@media screen and (max-width: 768px) {
  .consult {
    height: 100px;
    width: 75px;
    align-items: center;
    padding: 0;
  }
}
</style>
