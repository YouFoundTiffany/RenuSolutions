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
  <main><router-view /></main>
  <footer class="gradient-midnight-maritime-aquatic text-light">Copyright © 2023 | Renü Solutions Digital Lab | All Rights
    Reserved </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import Navbar2 from './components/Navbar2.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar2 }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}













//
</style>
