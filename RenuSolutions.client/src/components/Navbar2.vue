<!-- NAVBAR -->
<template>
  <!-- FIXME height is off by 1-2 pixels vs the homepage navbar -->
  <section class="d-flex justify-content-center m-0 p-1">
    <nav class="navbar bg-transparent navbar-expand-sm navbar-lightnavbar-expand-sm pe-2">
      <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
        <div class="d-flex align-items-center">
          <img src="src\assets\img\RenuLogoMockUp.png" alt="Renu Name" height="45" class="" title="Home">
          <img src="src\assets\img\RenuNameMidnight4.svg" alt="Renu Name" height="45" class="" title="Home">
        </div>
      </router-link>
      <button class="navbar-toggler d-lg-none pe-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span
          class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarText">
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
// import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  // components: { Login }
}
</script>

<style scoped>
/* custom navbar icon color */
/* Set the border color to the desired color */
/* .custom-toggler.navbar-toggler {
  border-color: var(--Midnight);
} */

/* Setting the stroke to green using rgb values (0, 128, 0) */

/* .custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 41, 92, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
} */

/* custom navbar icon color */
/* To Display Navbar over HomePage background image ONLY */
/* .navbar {
  position: relative;
  /* or 'fixed' if you want it to be fixed at the top */
/* z-index: 10; */
/* Higher than the background image */
/* top: 0; */
/* left: 0;
right: 0;
z-index: 1030; */
/* */
/* */
/* Use a higher z-index to ensure it's above other elements */
/* } */

/* To Display Navbar over HomePage background image ONLY */


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
