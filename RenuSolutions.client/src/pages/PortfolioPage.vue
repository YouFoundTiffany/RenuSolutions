<!-- PORTFOLIO -->
<template>
  <section class="container-flex mb-3">
    <img :src="Swoop" alt="website layout for small business" class="banner-img">
    <h1 class="centered m-4 p-4 text-Seashell fw-bold lght-txt-shad">Portfolio</h1>
  </section>

  <!-- PORTFOLIO CARDS -->
  <div class="row justify-content-around mt-5">
    <!-- 🅰️ -->
    <div class="col-10 col-md-4 col-sm-3 my-2 p-1 text-Midnight">
      <a href="https://app.fgfunnels.com/v2/preview/CDtpg7rhOxbI9MDywois?notrack=true" target="_blank">
        <img :src="Hypno" alt="Demo Website for a Professional Certified Hypnotist" class="portfolio-img elevation-3">
      </a>
    </div>
    <!-- 🅰️ -->
    <!-- 🅱️ -->
    <div class="col-10 col-md-4 col-sm-3 my-2 p-1 rounded text-Midnight">
      <a href="https://app.fgfunnels.com/v2/preview/CvYJt85c1zpN3CRskeKC?notrack=true" target="_blank">
        <img :src="Yoga" alt="Demo Website for a Professional Certified Hypnotist" class="portfolio-img elevation-3">
      </a>
    </div>
    <!-- 🅱️ -->
    <!-- PORTFOLIO CARDS -->

  </div>
</template>
<script setup>
import Hypno from '@/assets/img/hpno.png';
import Yoga from '@/assets/img/yoga.png';
import Swoop from '@/assets/img/final-basicbackgroundRenuSol.png';

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    const iframeSrc = this.querySelector('iframe').src;
    window.open(iframeSrc, '_blank'); // Opens in a new tab
  });
});

</script>
<style scoped lang="scss">
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

/* Text Over Image */
/* this is the container */
.container-flex {
  position: relative;
  text-align: center;
  color: white;
}

.centered {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48pt;
}

/* Text Over Image */

.card iframe {
  width: 100%;
  /* Full width of the container */
  height: auto;
  /* Auto height to maintain aspect ratio */
  border: none;
  /* Optional: Removes the default border of iframe */
}

/* Optional: Styles to maintain aspect ratio */
.portfolio-img {
  width: 100%;
  border-radius: 5px; // Optional for rounded corners
  transition: transform 0.3s; // For a smooth hover effect
}

.portfolio-img:hover {
  transform: scale(1.05); // Slightly enlarge on hover
}
</style>
