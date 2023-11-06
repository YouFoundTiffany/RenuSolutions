<!-- APP.VUE -->
<template>
  <header>
    <Navbar2 v-if="$route.name != 'Home'" />
    <div v-if="loading" class="loadingio-spinner-spin-gqrt81xkvci">
      <div class="ldio-3nv84htim87">
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>

  </header>
  <main>
    <router-view />

    <!-- Back to top button -->
    <button @click="topFunction" ref="mybutton" title="Go to top" class="scrollToTopBtn">
      <i class="mdi mdi-arrow-up-bold-circle-outline mdi-48px" style="text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.694)"></i>
    </button>


  </main>
  <!-- FIXME media query needed -->
  <footer class="gradient-midnight-maritime-aquatic text-light xsmol-txt-fts ps-1 py-0 pe-0 m-0">
    <PreFooter />
    Copyright © 2023 Renü Solutions Digital Lab. All rights reserved.
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import Navbar2 from './components/Navbar2.vue'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
      window.onscroll = scrollFunction;
    });


    const mybutton = ref(null);

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.value.style.display = "block";
      } else {
        mybutton.value.style.display = "none";
      }
    }

    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }

    // Make the functions available to the template
    return {
      account: computed(() => AppState.account),
      mybutton,
      topFunction,
      scrollFunction
    }
  },
  components: { Navbar2 },
};
</script>
<style lang="scss">
.xsmol-txt-fts {
  font-size: x-small !important;
}




@import "./assets/scss/main.scss";

// BACK TO TOP BUTTON
/* Back to top button style */
.scrollToTopBtn {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  position: fixed;
  /* Fixed position */
  bottom: 20px;
  /* 20px from the bottom */
  right: 20px;
  /* 20px from the right */
  z-index: 99;
  /* Make sure it sits on top of other elements */
  cursor: pointer;
  /* Pointer cursor on hover */
  display: none;
  /* Hidden by default */
  width: 50px;
  /* Width of the button */
  height: 50px;
  /* Height of the button */
  background-color: #33333300;
  /* Button background color */
  color: #00c6e0;
  /* Button text/icon color */
  border: none;
  /* No border */
  border-radius: 5px;
  /* Rounded corners */
  text-align: center;
  /* Center the icon/text */
  line-height: 50px;
  /* Center the icon/text vertically */
  font-size: 20px;
  /* Icon/text size */
}

/* Optional: A simple transition effect on hover */
.scrollToTopBtn:hover {
  background-color: #55555500;
  color: #00295c;
  transition: background-color 0.5s ease-in-out;
}

// MEDIA QUERY for landscape mode in mobile devices
@media (max-width: 767px) and (orientation: landscape) {
  .scrollToTopBtn {
    top: 20px;
    /* Adjust the distance from the top */
    bottom: auto;
    /* Remove the bottom positioning */
  }
}
</style>