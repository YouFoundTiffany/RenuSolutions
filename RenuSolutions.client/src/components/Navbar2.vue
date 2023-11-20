<!-- NAVBAR 2 -->
<template>
  <section class="nav-back py-lg-4 pt-sm-3 ps-1 pe-0 pb-0 m-0 container-flex justify-content-around">

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
            <li>
              <router-link :to="{ name: 'Portfolio' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
                Portfolio
              </router-link>
            </li>
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
      <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
        <button type="button"
          class="consult smol-txt-btn btn bg-Minty text-Midnight lighten-30 text-uppercase rounded elevation-3">
          Free Consult</button>
      </router-link>
      <!-- <div v-else style="width: 9vw;"></div> -->


      <!-- LOGIN COMPONENT HERE -->
      <!-- <Login /> -->

    </section>
    <!-- BANNER IMAGE  -->
    <section class="container-flex ban-title-contain mb-3">
      <h2 v-if="$route.name == 'Services'"
        class="centered too-big text-center my-4 mx-1 p-4 text-Seashell fw-bold lght-txt-shad">
        Services</h2>
      <h2 v-else-if="$route.name == 'Portfolio'"
        class="centered too-big text-center my-4 mx-1 p-4 text-Seashell fw-bold lght-txt-shad">
        Portfolio</h2>
      <h2 v-else class="centered too-big text-center my-4 mx-1 p-4 text-Seashell fw-bold lght-txt-shad">How
        can we help?</h2>
    </section>
  </section>
  <!-- BANNER IMAGE  -->
</template>

<script>
import Swoop from '@/assets/img/final-basicbackgroundRenuSol.png';

import RenuSolutionsLogo from '@/assets/img/RenuSolutionsDigitalLabLogoandNameGLOW.svg';

// import Login from './Login.vue';
export default {
  setup() {
    return {
      Swoop: Swoop,
      logo: RenuSolutionsLogo,
    }
  },
  // components: { Login }
}
</script>

<style scoped>
/* 1 */
/* .nav-back {
  background-image: url(../assets/img/final-basicbackgroundRenuSol.png);
} */

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

/*
  ====================
   Navbar background and banner image combo
  ====================   */

.lght-txt-shad {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.235);
}

.banner-img {
  object-fit: cover !important;
  object-position: center center !important;
  overflow: hidden !important;
  height: 30vh !important;
  width: 100vw !important;
}

/* Adjust the navbar section to use flexbox and center items */
.nav-back {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  height: 467.53px;
  /* Adjust height as needed  */
  background-image: url(../assets/img/final-basicbackgroundRenuSol.png);

}

/* Ensure the title container is centered within the navbar */
.ban-title-contain {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.centered {
  position: relative;
  text-align: center;
  font-size: 48pt;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.235);
}


/* 4 */
/* .ban-title-contain {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
}

/* Style the page title */
.centered {
  font-size: 48pt;
  color: white;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.235);
}


/* Text Over Image */
/* this is the container */
/* 2 */
/* .ban-title-contain {
  position: relative;
  text-align: center;
  color: white;
} */

/* 3 */
/* .centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48pt;
} */

/* Text Over Image */
/*
  ====================
   Navbar background and banner image combo
  ====================   */
</style>
