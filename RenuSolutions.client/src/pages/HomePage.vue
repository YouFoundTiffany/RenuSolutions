<!-- HOME PAGE -->
<template>
  <!-- 🖼️ TOPLINE OUTER WRAPPER W/ BACKGROUND IMAGE -->
  <section class="container-flex text-center top-sec-bg-image justify-content-center m-0 p-0">

    <!-- 🧭 NAVBAR ON HOME PAGE ONLY -->
    <section class="m-0 p-0 d-flex align-items-center justify-content-center">
      <nav v-if="$route.name === 'Home'"
        class="navbar bg-transparent navbar-expand-sm navbar-light navbar-expand-md pe-2 m-0">
        <!-- <div style="width: 10vw;"> -->
        <!-- spacer -->
        <!-- </div> -->
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <div class="align-items-center justify-content-center">
            <img src="src\assets\img\RenuLogoMockUp.png" alt="Renu Name" height="45" class="" title="Home">
            <img src="src\assets\img\RenuNameMidnight4.svg" alt="Renu Name" height="45" class="" title="Home">
          </div>
        </router-link>
        <button class="navbar-toggler d-lg-none pe-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
          aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation"><span
            class="navbar-toggler-icon"></span></button>
        <div class="collapse d-flex navbar-collapse justify-content-around" id="navbarText">
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
    <!-- 🧭 HOME PAGE NAVBAR ONLY END-->
    <section class="" style="min-height: 35vh;">
      <div class="container ">
        <div class=" row justify-content-around text-Midnight p-0 m-0 animate__animated animate__backInLeft">
          <div class="row">
            <div class="col-12 col-md-6 col-sm-4">
              <h1 class=" fw-bold text-start ms-5 mt-3 mb-0 ps-5 xxbig-txt-msg text-Minty"
                style="text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.694);">Custom Web
                Solutions<br>for the
                Modern Small Business

              </h1>
              <!-- lh-sm line height -->
              <p class="fw-semibold text-start lh-sm ms-5 my-2 me-4 ps-5 smol-txt-msg text-Midnight"
                style="text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.694);">Ditch WordPress for
                our
                bespoke,
                human-coded
                web
                designs<br>that ensure superior performance, with plans starting at $150 a month." </p>
            </div>
            <div class="col-12 col-md-4 justify-content-start d-flex">
              <!-- FIXME Add media query -->
              <img class="ad-img justify-content-start img-fluid" src="src/assets/img/mock-up-replace.png" alt="">
            </div>
            <!-- FIXME THIS NEEDS A MEDIA QUERY -->
            <div class="container d-flex ms-5 ps-5">
              <div class="container d-flex ps-5 ps-md-5" style="margin-top: -5vh; margin-left: 15vw;">
                <router-link :to="{ name: 'Contact' }"
                  class="smol-txt-btn btn lighten-30 text-uppercase fw-bold text-Midnight rounded bg-Minty align-items-center d-flex elevation-3 d-flex">
                  GET IN TOUCH!
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 🧭 NAVBAR END -->
  </section>
  <!-- 🖼️ TOPLINE OUTER WRAPPER W/ BACKGROUND IMAGE END-->



  <!-- 🚀 spacer div -->
  <!-- <div style="height: 60vh;">
  </div> -->
  <!-- 🚀 spacer div -->


  <!-- HOME PAGE CONTENT -->
  <!--🦄 BODY -->

  <!-- 1️⃣SINGLE CONTENT DIV -->
  <div class="container mt-2 mb-2 text-Midnight">
    <div class="row py-5 justify-content-center align-items-center">
      <div class="col-12 col-md-6 text-center">
        <h1 class="fw-bold">WHAT WE DO</h1>
        <div class="text-Midnight">
          <span>———</span><i class="mdi
          mdi-pyramid"></i><span>———</span>
        </div>
        <p>We Specialize in providing a quality, full-stack, business system that has a proven track record of increasing
          revenue for small businesses like yours. This allows you the time and freedome to meet with your clients, which
          brings in more revenue.
        </p>
        <p class="fst-italic">You finally get to focus on what you really love about your business!
        </p>
        <div class="text-Midnight">
          <span>———</span><i class="mdi
          mdi-pyramid mdi-flip-v"></i><span>———</span>
        </div>
      </div>
    </div>
  </div>
  <!-- SINGLE CONTENT DIV -->


  <!-- 2️⃣ TRIPLE CARDS -->
  <section class="container my-2">
    <div class="row justify-content-around">
      <!-- 🅰️ -->
      <div class="col-3 card h-30 elevation-3 text-Midnight">
        <i class="mdi mdi-pipe fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title  text-center">Full-Stack</h5>
          <p class="card-text text-start Merri-light-smol "> We build a system that has every important tool at your
            fingertips,
            and they all
            work
            together!</p>
        </div>
      </div>
      <!-- 🅱️ -->
      <div class="col-3 card h-30 elevation-3 text-Midnight">
        <i class="mdi mdi-tablet-cellphone fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Mobile First</h5>
          <p class="card-text text-start Merri-light-smol">Your web products will display and be repsponsive in all
            mobile sizes.
          </p>
        </div>
      </div>
      <!-- 🆎 -->
      <div class="col-3 card h-30 elevation-3 text-Midnight">
        <i class="mdi mdi-key fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Turn Key</h5>
          <p class="text-start Merri-light-smol">
            Everything you need to
            run your entire
            business is all organized for you.</p>
        </div>
      </div>
    </div>
    <!-- 2️⃣ TRIPLE CARDS END-->

    <!-- 3️⃣ Horizontal Card DIV -->
    <section class="container my-2 text-Midnight">
      <div class="row py-5 justify-content-center align-items-center">
        <!-- PIGGY -->
        <div class="col-3">
          <img src="src/assets/img/piggyBank.svg" alt="" class="piggyBank img-fluid">
        </div>
        <!-- PIGGY -->
        <!-- $150 CONTRACT -->
        <div class="col-12 col-md-8">
          <h1 class="fw-bold  lh-1"><span class="text-Aquatic">$150</span> per Month,<br>6 month Minimum Contract</h1>
          <!-- $150 CONTRACT -->

          <!-- CHECK POINTS ROW 1 -->
          <div class="row squish">
            <!-- Infinity 1 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 1 content-->
              <p class=" fw-bold">
                <span class="smol-txt-checks fw-bold">Inclusive Hosting Costs</span>
                <br>
                <span class="xsmol-txt-checks">Your monthly plan encompasses all hosting charges.</span>
              </p>
            </div>
            <!-- Infinity 2 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 2 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Unlimited Revisions & Round-the-Clock Support
                </span>
                <br>
                <span class="xsmol-txt-checks">Feel free to request any modifications at any time, and expect completion
                  within the same day.
                </span>
              </p>
            </div>
          </div>
          <!-- CHECK POINTS ROW 2 -->
          <div class="row squish">
            <!-- Infinity 3 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 3 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Direct 24/7 Support Access
                </span>
                <br>
                <span class="xsmol-txt-checks">Contact us directly at any hour—avoiding automated menus and getting
                  immediate human assistance.
                </span>
              </p>
            </div>
            <!-- Infinity 4 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 4 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Comprehensive Web Crafting
                </span>
                <br>
                <span class="xsmol-txt-checks">Our package offers over 40 hours dedicated to meticulous web design,
                  development, and rigorous quality checks.
                </span>
              </p>
            </div>
          </div>

          <!-- CHECK POINTS ROW 3 -->
          <div class="row squish">
            <!-- Infinity 5 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 5 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Top-Tier Google Page Speed Ratings
                </span>
                <br>
                <span class="xsmol-txt-checks">Attain an impeccable score of 100 in Google Page Speed insights, enhancing
                  your site's visibility.
                </span>
              </p>
            </div>
            <!-- Infinity 6 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 6 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Complimentary Google Analytics Integration
                </span>
                <br>
                <span class="xsmol-txt-checks">We provide a complimentary setup of Google Analytics to track your
                  website's traffic sources and visitor behavior.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 3️⃣ Horizontal Card DIV END -->

    <!-- 4️⃣ Horizontal Card DIV -->
    <section class="container my-2 text-Midnight">
      <div class="row py-2 justify-content-center align-items-center">

        <!-- $150 CONTRACT -->
        <div class="col-12 col-md-8">
          <h1 class="fw-bold lh-1"><span>Add-On Package</span><br><span class="text-Aquatic">$50</span> per Month,<br>6
            month
            Minimum Contract</h1>
          <!-- $150 CONTRACT -->

          <!-- CHECK POINTS ROW 1 -->
          <div class="row squish">
            <!-- Infinity 1 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 1 content-->
              <p class=" fw-bold">
                <span class="smol-txt-checks fw-bold">Inclusive Hosting Costs</span>
                <br>
                <span class="xsmol-txt-checks">Your monthly plan encompasses all hosting charges.</span>
              </p>
            </div>
            <!-- Infinity 2 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 2 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Unlimited Revisions & Round-the-Clock Support
                </span>
                <br>
                <span class="xsmol-txt-checks">Feel free to request any modifications at any time, and expect completion
                  within the same day.
                </span>
              </p>
            </div>
          </div>
          <!-- CHECK POINTS ROW 2 -->
          <div class="row squish">
            <!-- Infinity 3 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 3 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Direct 24/7 Support Access
                </span>
                <br>
                <span class="xsmol-txt-checks">Contact us directly at any hour—avoiding automated menus and getting
                  immediate human assistance.
                </span>
              </p>
            </div>
            <!-- Infinity 4 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 4 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Comprehensive Web Crafting
                </span>
                <br>
                <span class="xsmol-txt-checks">Our package offers over 40 hours dedicated to meticulous web design,
                  development, and rigorous quality checks.
                </span>
              </p>
            </div>
          </div>

          <!-- CHECK POINTS ROW 3 -->
          <div class="row squish">
            <!-- Infinity 5 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 5 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Top-Tier Google Page Speed Ratings
                </span>
                <br>
                <span class="xsmol-txt-checks">Attain an impeccable score of 100 in Google Page Speed insights, enhancing
                  your site's visibility.
                </span>
              </p>
            </div>
            <!-- Infinity 6 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 6 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Complimentary Google Analytics Integration
                </span>
                <br>
                <span class="xsmol-txt-checks">We provide a complimentary setup of Google Analytics to track your
                  website's traffic sources and visitor behavior.</span>
              </p>
            </div>
          </div>
        </div>
        <!-- MONEY HANDS -->
        <div class="col-3">
          <img src="src/assets/img/moneyHands.svg" alt="" class="img-fluid">
        </div>
        <!-- MONEY HANDS -->
      </div>
    </section>
    <!-- 4️⃣ Horizontal Card DIV END -->


    <!-- 1️⃣SINGLE CONTENT DIV -->
    <div class="container my-2 text-Midnight">
      <div class="row py-2 justify-content-center align-items-center">
        <div class="col-12 col-md-6 text-center">
          <h1 class="fw-bold">WHO WE ARE</h1>
          <div class="text-Midnight">
            <span>———</span><i class="mdi
          mdi-pyramid"></i><span>———</span>
          </div>

          <p>We Specialize in providing a quality, full-stack, business system that has a proven track record of
            increasing
            revenue for small businesses like yours. This allows you the time and freedome to meet with your clients,
            which
            brings in more revenue.
          </p>
          <p class="fst-italic">You finally get to focus on what you really love about your business!
          </p>
          <!-- My name is Ryan, I am a stay at home dad and web developer. I started this business to help provide for the family while still being able to be home and raise the kids. I spent a year and a half teaching myself the right way to make websites and learning to write the code myself. Now after being in business professionally for over 5 years I have built hundreds websites and have my method down to a science. LEARN MORE -->

          picture of Tiffany
          Tiffany H.
          OWNER/DEVELOPER
          <div class="text-Midnight">
            <span>———</span><i class="mdi
          mdi-pyramid mdi-flip-v"></i><span>———</span>
          </div>
        </div>
      </div>
    </div>
    <!-- SINGLE CONTENT DIV -->



    <!--🦄 BODY END -->
  </section>


  <!-- </section> -->
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style scoped lang="scss">
.piggyBank {
  max-height: 10rem;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
}

// letter spacing

.card:hover i.onhvr {
  scale: 1.5;
  transition: 0.2s;
}

.Merri-light-smol {
  font-family: 'Merriweather', serif !important;
  font-weight: 400 !important;
  font-size: small !important;
}

.squish {
  line-height: .75;
}

.smol-txt-checks {
  font-size: small !important;
}

.xsmol-txt-checks {
  font-size: x-small !important;
  font-weight: 500 !important;
}

.smol-txt-msg {
  font-size: small !important;
  font-weight: 800 !important;
}

.xxbig-txt-msg {
  font-size: xx-large !important;
  // font-weight: 800;
}

// small text for button
.smol-txt-btn {
  text-align: center !important;
  height: 35px !important;
  font-size: x-small !important;
  font-weight: 600 !important;
}

.smol-txt-btn:hover {
  background-color: var(--Aquatic) !important;
  color: var(--Minty) !important;
  transition: 0.2s !important;
}



//ad mock up image
.ad-img {
  max-height: 60vh;
  // object-fit: cover;
  // object-position: left center;
}

/* To Display Navbar over HomePage background image ONLY */
.top-sec-bg-image {
  background-image: url("../assets/img/final-basicbackgroundRenuSol.svg");
  // background-attachment: fixed;
  /* This keeps the background image fixed during scroll */
  // height: 140vh;
  width: 100%;
  background-size: cover;
  background-position: center;
  /* You can adjust this to fit the size you want */
  // position: relative;
  // z-index: 1;
}

/* To Display Navbar over HomePage background image ONLY */
</style>

<!-- <i class="mdi mdi-pyramid"></i>
<i class="mdi mdi-hours-24"></i>
<i class="mdi mdi-infinity"></i>
<i class="mdi mdi-power-plug"></i> -->