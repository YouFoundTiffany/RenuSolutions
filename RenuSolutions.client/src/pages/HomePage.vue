<!-- HOME PAGE -->
<template>
  <!-- 🖼️ - TOPLINE OUTER WRAPPER W/ BACKGROUND IMAGE -->
  <section class="container-flex text-center top-sec-bg-image justify-content-center m-0 p-0">

    <!-- 🧭 - NAVBAR ON HOME PAGE ONLY -->
    <section class="m-0 p-0 d-flex align-items-center justify-content-center">
      <nav v-if="$route.name === 'Home'"
        class="navbar bg-transparent navbar-expand-sm navbar-light navbar-expand-sm pe-2 m-0">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <div class="align-items-center justify-content-center renu-glow">
            <img :src="logo" alt="Renu Solutions Logo" height="45" class="" title="Home">
            <!-- <img src="src\assets\img\RenuLogoMockUp.png" alt="Renu Name" height="45" class="" title="Home">
            <img src="src\assets\img\RenuNameMidnight4.svg" alt="Renu Name" height="45" class="" title="Home"> -->
          </div>
        </router-link>
        <button class="navbar-toggler d-lg-none pe-2" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarText1" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarText1">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <!-- <li>
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
            </li> -->
          </ul>
        </div>
      </nav>
    </section>
    <!-- 🧭 - HOME PAGE NAVBAR ONLY END-->


    <section class="" style="min-height: 35vh;">
      <div class="container">
        <div class=" row justify-content-around text-Midnight p-0 m-0n animate__animated animate__backInLeft">
          <!-- animate__animated animate__backInLeft -->
          <div class="row">
            <div class="col-12 col-md-6">
              <h1 class=" fw-bold text-start ms-5 mt-3 mb-0 ps-5 xxbig-txt-msg text-Minty txt-shad">Custom Web
                Solutions<br>for the
                Modern Small Business

              </h1>
              <!-- lh-sm line height -->
              <p class="fw-medium text-start lh-md ms-5 my-2 me-4 ps-5 smol-txt-msg text-Midnight txt-glow">Ditch
                WordPress for
                our
                bespoke,<br>
                human-coded
                web
                designs<br>that ensure superior performance,<br>with plans starting at $150 a month." </p>



              <!-- ⭐Comment back in for Router-Link to Contact page -->
              <!-- <router-link :to="{ name: 'Contact' }"
              class="smol-txt-btn btn bg-Minty text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
              GET IN TOUCH!
            </router-link> -->
              <!-- TEMP Button trigger modal -->

              <button type="button"
                class="smol-txt-btn btn bg-Minty text-Midnight ighten-30 text-uppercase rounded elevation-3 m-3"
                data-toggle="modal" data-target="#getInTouchModal">
                GET IN TOUCH!</button>
              <!-- TEMP Button trigger modal -->



            </div>
            <!-- Static mockup Image -->
            <img class="ad-img justify-content-start img-fluid d-flex col-12 col-md-6" :src="Mockups" alt="Mockups"
              style="object-fit: contain;object-position: center;">


            <div class="container d-flex ms-5 ps-5">
              <div class="container d-flex ps-5 ps-md-5">
              </div>
            </div>
          </div>
        </div>


        <!-- TEMP Modal -->
        <div class="modal fade" id="getInTouchModal" tabindex="-1" role="dialog" aria-labelledby="getInTouchModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content fw-medium">
              <img :src="RenuLogoMockUp" alt="Renu Logo Mock Up" class="img-fluid"
                style="object-fit: contain; object-position: center; max-height: 10vh;">
              <p>Schedule your discovery session today!<br>Email, Text, or Call</p>
              <p><i class="mdi mdi-bullhorn mdi-24px text-Aquatic"></i>(208) 918-0942</p>
              <p><i class="mdi mdi-bullhorn mdi-24px text-Aquatic"></i>Info@RenuSolutions.tech</p>

            </div>
          </div>
        </div>
      </div>
      <!-- TEMP Modal -->
      <!-- </div>
          <img class="ad-img justify-content-start img-fluid d-flex col-12 col-md-6"
          src="src/assets/img/mock-up-replace.png" alt="" style="object-fit: contain;object-position: center;">
          <div class="container d-flex ms-5 ps-5">
            <div class="container d-flex ps-5 ps-md-5">
            </div>
          </div>
        </div>
      </div> -->


    </section>



    <!-- 🧭 - NAVBAR END -->
  </section>
  <!-- 🖼️ - TOPLINE OUTER WRAPPER W/ BACKGROUND IMAGE END-->


  <!-- HOME PAGE CONTENT -->
  <!--🦄 - BODY -->

  <!-- 1️⃣ - SINGLE CONTENT DIV -->
  <div class="container mt-2 text-Midnight">
    <div class="row pt-5 justify-content-center align-items-center">
      <div class="col-12 col-md-6 text-center">
        <h1 class="fw-bold">WHAT WE DO</h1>
        <div class="text-Midnight">
          <span>———</span><i class="mdi
          mdi-pyramid"></i><span>———</span>
        </div>
        <p class="fst-italic fw-medium">You finally get to focus on what you really love about your business!
        </p>
        <p class="fw-medium">We Specialize in providing a quality business system that has a proven track record of
          increasing
          revenue for small businesses like yours. This allows you the time and freedom to meet with your clients, which
          brings in more revenue.</p>


        <!-- MODAL BUTTON-->
        <h5 type="button" class="" data-toggle="modal" data-target="#DeltaERPModal"><span class="fw-bold
            learn-more">LEARN MORE</span></h5>
        <!-- MODAL -->
        <div class="modal fade" id="DeltaERPModal" tabindex="-1" role="dialog" aria-labelledby="DeltaERPModalLabel"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="DeltaERPModalLabel">The Renü Solutions <span class="Delta">Delta</span>
                  ERP</h5>
              </div>
              <div class="modal-body">
                <p class="text-start fw-normal">What is the Delta ERP or an ERP? ERP stands for
                  <span style="text-decoration: underline;">E</span>nterprise
                  <span style="text-decoration: underline;">R</span>esource
                  <span style="text-decoration: underline;">P</span>lanning
                  software.
                </p>
                <p class="text-start">
                  ERPs are systems utilized by medium and large businesses to run everything in a systematic and organized
                  way. We have taken the <span class="fst-italic">BEST</span> of these systems and made them
                  available to small businesses
                  like yours, which is what we call the <span class="fw-bold fs-5">Delta ERP</span>.<br><br>
                  We have also added in some of our own special sauce to make it even better. We have seen it increase
                  revenue for every business that has used it.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- MODAL -->
        <div class="text-Midnight">
          <span>———</span><i class="mdi
          mdi-pyramid mdi-flip-v"></i><span>———</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 1️⃣ - SINGLE CONTENT DIV -->


  <!-- 🚀 - spacer div 1️⃣ -->
  <!-- Do NOT copy this Spacer Set it is custom, use 2 or 3 -->
  <div class="spacer mx-3 d-flex justify-content-center align-items-center" style="height: 30vh;">
    <!-- DIVIDER LINE -->
    <div class="container mx-5 my-4 px-5">
      <hr class="solid mx-5" style="color: var(--Midnight);">
    </div>
    <!-- DIVIDER LINE -->
  </div>
  <!-- 🚀 - spacer div 1️⃣-->


  <!-- 2️⃣ - TRIPLE CARDS -->
  <section class="container my-2">
    <div class="row justify-content-around">
      <!-- 🅰️ -->
      <div class="col-12 col-md-3 card h-30 mb-3 elevation-3 text-Midnight">
        <i class="mdi mdi-pipe fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Full-System</h5>
          <p class="card-text text-start fw-semibold smol-txt-checks">We build a system that has every important tool at
            your
            fingertips,
            and they all
            work
            together!</p>
        </div>
      </div>
      <!-- 🅱️ -->
      <div class="col-12 col-md-3 card h-30 mb-3 elevation-3 text-Midnight">
        <i class="mdi mdi-tablet-cellphone fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Mobile First</h5>
          <p class="card-text text-start fw-semibold smol-txt-checks">Your web products will display and be repsponsive in
            all
            mobile sizes.
          </p>
        </div>
      </div>
      <!-- 🆎 -->
      <div class="col-12 col-md-3 card h-30 mb-3  elevation-3 text-Midnight">
        <i class="mdi mdi-key fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Turn Key</h5>
          <p class="text-start fw-semibold smol-txt-checks">
            Everything you need to
            run your entire
            business is all organized for you.</p>
        </div>
      </div>
    </div>
    <!-- 2️⃣ - TRIPLE CARDS END-->


    <!-- 🚀 spacer div 2️⃣-->
    <div class="spacer d-flex align-items-center" style="height: 30vh;">
      <!-- DIVIDER LINE -->
      <div class="container mx-5 my-4 px-5 align-items-center">
        <hr class="solid mx-5" style="color: var(--Midnight);">
      </div>
      <!-- DIVIDER LINE -->
    </div>
    <!-- 🚀 spacer div 2️⃣-->


    <!-- 3️⃣ - Horizontal Card DIV -->
    <section class="container mb-2 text-Midnight">
      <div class="row pb-5 justify-content-center align-items-center">
        <!-- PIGGY -->
        <div class="col-3">
          <img :src="piggyBank" alt="Piggy Bank" class="piggyBank img-fluid">
        </div>
        <!-- PIGGY -->
        <!-- $150 CONTRACT -->
        <div class="col-12 col-md-8">
          <h1 class="fw-bold  lh-1">Starting at<span class="text-Aquatic lght-txt-shad"> $150</span> per Month,<br>6 month
            Minimum
            Contract</h1>
          <!-- $150 CONTRACT -->
          <h3 class="fw-bold text-Aquatic lght-txt-shad">The Simple Static Website</h3>
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
    <!-- 3️⃣ - Horizontal Card DIV END -->

    <!-- 4️⃣ - Horizontal Card DIV -->
    <section class="container my-2 text-Midnight">
      <div class="row py-2 justify-content-center align-items-center">

        <!-- $50 CONTRACT -->
        <div class="col-12 col-md-8">
          <h1 class="fw-bold lh-1"><span>Upgrade Package</span><br><span class="text-Aquatic lght-txt-shad">$50</span> per
            Month,<br>6
            month
            Minimum Contract</h1>
          <!-- $150 CONTRACT -->
          <h3 class="fw-bold text-Aquatic lght-txt-shad">The Delta ERP</h3>
          <!-- CHECK POINTS ROW 1 -->
          <div class="row squish">
            <!-- Infinity 1 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 1 content-->
              <p class=" fw-bold">
                <span class="smol-txt-checks fw-bold">Customer Relationship Manager (CRM)
                </span>
                <br>
                <span class="xsmol-txt-checks">Easily Manage all of Your Customer Interactions</span>
              </p>
            </div>
            <!-- Infinity 2 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 2 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Calendar Scheduler</span>
                <br>
                <span class="xsmol-txt-checks">Online Scheduling, Automated Reminders, and More </span>
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
                <span class="smol-txt-checks fw-bold">Website & Funnel Builder</span>
                <br>
                <span class="xsmol-txt-checks">Direct Potential Customers to your Site</span>
              </p>
            </div>
            <!-- Infinity 4 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 4 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Membership Portal</span>
                <br>
                <span class="xsmol-txt-checks">Virtual Training System</span>
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
                <span class="smol-txt-checks fw-bold">Messaging Capabilities</span>
                <br>
                <span class="xsmol-txt-checks">Integrated Email, Text, Phone, etc.</span>
              </p>
            </div>
            <!-- Infinity 6 check -->
            <div class="col-1 p-0 m-0 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 6 content-->
              <p class="">
                <span class="smol-txt-checks fw-bold">Online Payments</span>
                <br>
                <span class="xsmol-txt-checks">Accept and Manage Your Revenue</span>
              </p>
            </div>
          </div>
        </div>
        <!-- MONEY HANDS -->
        <div class="col-3">
          <img :src="moneyHands" alt="Money Hands" class="img-fluid">
        </div>
        <!-- MONEY HANDS -->
      </div>
    </section>
    <!-- 4️⃣ - Horizontal Card DIV END -->


    <!-- 🚀 spacer div 3️⃣-->
    <div class="spacer d-flex align-items-center" style="height: 30vh;">
      <!-- DIVIDER LINE -->
      <div class="container mx-5 my-4 px-5 align-items-center">
        <hr class="solid mx-5" style="color: var(--Midnight);">
      </div>
      <!-- DIVIDER LINE -->
    </div>
    <!-- 🚀 spacer div 3️⃣-->


    <!-- 5️⃣ - SINGLE CONTENT DIV -->
    <div class="container my-2 text-Midnight">
      <div class="row py-2 justify-content-center align-items-center">
        <div class="col-12 col-md-6 text-center">
          <h1 class="fw-bold">WHO WE ARE</h1>
          <span>———</span><i class="mdi mdi-heart-outline"></i><span>———</span>
          <p class="text-start fw-medium"> My name is Tiffany, I am a web developer that found their special skill later
            in life. I
            started this
            business to help other small
            business
            owners, like you. My mission is to assist others in achieving thier biggest dreams for thier business. I
            do that by managing and providing all of the hard stuff so they can focus on being their best-selves for thier
            clients.
          </p>
          <!-- <img src="" alt="picture of Tiffany"> -->
          <p class="fw-medium">
            <br>Tiffany H. OWNER/DEVELOPER
          </p>
          <p class="fst-italic fw-medium">Personal Motto:<br><span class="fs-5">Make the World Better, One Day at a
              Time!</span>
          </p>
          <div class="text-Midnight">
            <span>———</span><i class="mdi mdi-heart-outline"></i><span id="HomePageFooter">———</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 5️⃣ - SINGLE CONTENT DIV -->



    <!--🦄 - BODY END -->
  </section>


  <!-- </section> -->
</template>

<script>

import RenuSolutionsLogo from '@/assets/img/RenuSolutionsDigitalLabLogoandNameGLOW3.svg';
import piggyBank from '@/assets/img/piggyBank.svg';
import moneyHands from '@/assets/img/moneyHands.svg';
import RenuLogoMockUp from '@/assets/img/RenuLogoMockUp.png';
import Mockups from '@/assets/img/Mockups.png';


export default {
  setup() {


    return {
      logo: RenuSolutionsLogo,
      piggyBank: piggyBank,
      moneyHands: moneyHands,
      RenuLogoMockUp: RenuLogoMockUp,
      Mockups: Mockups,

    }
  }
}
</script>

<style scoped lang="scss">
// MODAL HOVER
.learn-more:hover {
  scale: 1.5;
  font-size: x-large;
  transition: 0.3s;
  color: var(--Aquatic);
  cursor: pointer;
}

.piggyBank {
  max-height: 10rem;
  max-width: 100%;
  object-fit: cover;
  object-position: center;
}

// letter spacing

.card:hover i.onhvr {
  scale: 1.5;
  transition: 0.3s;
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
  font-weight: 700 !important;
}

.smol-txt-msg {
  font-size: medium !important;
  font-weight: 800 !important;
}

.lght-txt-shad {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.367);
}

.txt-shad {
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.694);
}

.renu-glow {
  backdrop-filter: rgba(255, 255, 255, 0.603) !important;
  // backdrop-filter: 1px 1px 1px rgba(255, 255, 255, 0.836);
}

.txt-glow {
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.836);
}

.xxbig-txt-msg {
  font-size: xx-large !important;
  // font-weight: 800;
}

// small text for button
.smol-txt-btn {
  padding-top: 10px;
  height: 35px !important;
  font-size: x-small !important;
  font-weight: 800 !important;
}

.smol-txt-btn:hover {
  background-color: var(--Aquatic) !important;
  color: var(--Minty) !important;
  transition: 0.3s !important;
  scale: 1.3;

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

// ====================  //
//  BASIC NAVBAR SETTINGS   //
// ====================  //
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

// ====================  //
//  BASIC NAVBAR SETTINGS   //
// ====================  //
</style>

<!-- <i class="mdi mdi-pyramid"></i>
<i class="mdi mdi-hours-24"></i>
<i class="mdi mdi-infinity"></i>
<i class="mdi mdi-power-plug"></i> -->