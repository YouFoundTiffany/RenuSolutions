PORTFOLIO
<template>
  <!-- PORTFOLIO CARDS -->

  <div class="row justify-content-around mt-5">
    <!-- 🅰️ -->
    <div class="col-10 col-md-3 col-sm-3 my-2 rounded elevation-3 text-Midnight">
      <a href="https://app.fgfunnels.com/v2/preview/CDtpg7rhOxbI9MDywois?notrack=true" target="_blank">
        <img :src="Hypno" alt="Demo Website for a Professional Certified Hypnotist"
          class="portfolio-img">src/assets/img/hpno.png
      </a>
    </div>
    <!-- 🅰️ -->
    <!-- 🅱️ -->
    <div class="col-10 col-md-3 col-sm-3 my-2 rounded elevation-3 text-Midnight">
      <a href="https://app.fgfunnels.com/v2/preview/CvYJt85c1zpN3CRskeKC?notrack=true" target="_blank">
        <img :src="Yoga" alt="Demo Website for a Professional Certified Hypnotist"
          class="portfolio-img">src/assets/img/yoga.png
      </a>
    </div>
    <!-- 🅱️ -->
    <!-- PORTFOLIO CARDS -->

  </div>
</template>
<script setup>
import Hypno from '@/assets/img/hpno.png';
import Yoga from '@/assets/img/yoga.png';

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', function () {
    const iframeSrc = this.querySelector('iframe').src;
    window.open(iframeSrc, '_blank'); // Opens in a new tab
  });
});

</script>
<style scoped lang="scss">
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
