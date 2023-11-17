<!-- HOME PAGE -->
<template>
  <!-- 🖼️ - TOPLINE OUTER WRAPPER W/ BACKGROUND IMAGE -->
  <section class="m-0 p-0 container-flex top-sec-bg-image justify-content-around">
    <!-- 🧭 - NAVBAR ON HOME PAGE ONLY -->
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
          data-bs-target="#navbarText1" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarText1">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <!-- <li>
              <router-link :to="{ name: 'About' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
                About
              </router-link>
            </li>-->
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
            <!--  <li>
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
          class="consult smol-txt-btn btn bg-Minty text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
          Free Consult</button>
      </router-link>
    </section>
    <!-- 🧭 - HOME PAGE NAVBAR ONLY END-->
    <section class="" style="min-height: 35vh;">
      <div class="container">
        <div class=" row justify-content-around text-Midnight p-0 m-0n animate__animated animate__backInLeft">
          <!-- animate__animated animate__backInLeft -->
          <div class="row">
            <div class="col-12 col-md-6">
              <h1
                class="headline fw-bold text-start ms-5 mt-3 mb-0 ps-lg-5 ps-md-2 ps-sm-2 xxbig-txt-msg text-Minty txt-shad">
                Custom
                Web
                Solutions<br>for the
                Modern Small Business
              </h1>
              <!-- lh-sm line height -->
              <p
                class="fw-medium text-start lh-md ms-5 my-2 me-4 ps-lg-5 ps-md-2 ps-sm-2 lrg-txt-msg text-Midnight txt-glow">
                Ditch
                WordPress for
                our
                bespoke,<br>
                human-coded
                web
                designs<br>that ensure superior performance,<br>with plans starting at $150 a month." </p>
              <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight ms-5">
                <button type="button"
                  class="smol-txt-btn btn bg-Minty text-Midnight lighten-30 text-uppercase rounded elevation-3 ms-5">
                  Get In Touch!</button>
              </router-link>
            </div>
            <!-- Static mockup Image -->
            <img class="ad-img justify-content-start img-fluid d-flex col-12 col-md-6" :src="Mockups"
              alt="mockups of full screen and mobile websites and funnels for small businesses for online success leads funnels web development"
              height="351.34" width="648" style="max-width: 100%;" title="Your New Mobile First Website">
            <div class="container d-flex ms-5 ps-5">
              <div class="container d-flex ps-5 ps-md-5">
              </div>
            </div>
          </div>
        </div>
      </div>




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
        <h1 class="fw-bold Playfair">WHAT WE DO</h1>
        <div class="text-Midnight">
          <span>———</span><i class="mdi
          mdi-pyramid"></i><span>———</span>
        </div>
        <p class="fst-italic fw-medium">You finally get to focus on what you really love about your business!
        </p>
        <p class="fw-medium">We Specialize in providing a quality business systems that has a proven track record of
          increasing
          revenue for small businesses like yours. This allows you the time and freedom to meet with your clients, which
          brings in more revenue.</p>



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
  <!-- <div class="spacer mx-3 d-flex justify-content-center align-items-center"> -->
  <!-- DIVIDER LINE -->
  <!-- <div class="container mx-5 my-4 px-5">
      <hr class="solid mx-5" style="color: var(--Midnight);">
    </div> -->
  <!-- DIVIDER LINE -->
  <!-- </div> -->
  <!-- 🚀 - spacer div 1️⃣-->

  <section class="container my-2">

    <!-- 2️⃣ - TRIPLE CARDS -->
    <!-- <div class="row justify-content-around"> -->
    <!-- 🅰️ -->
    <!-- <div class="col-10 col-md-3 card h-30 mb-3 elevation-3 text-Midnight">
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
      </div> -->
    <!-- 🅱️ -->
    <!-- <div class="col-10 col-md-3 card h-30 mb-3 elevation-3 text-Midnight">
        <i class="mdi mdi-tablet-cellphone fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Mobile First</h5>
          <p class="card-text text-start fw-semibold smol-txt-checks">Your web products will display and be repsponsive in
            all
            mobile sizes.
          </p>
        </div>
      </div> -->
    <!-- 🆎 -->
    <!-- <div class="col-10 col-md-3 card h-30 mb-3  elevation-3 text-Midnight">
        <i class="mdi mdi-key fs-1 onhvr text-center"></i>
        <div class="card-body">
          <h5 class="card-title text-center">Turn Key</h5>
          <p class="text-start fw-semibold smol-txt-checks">
            Everything you need to
            run your entire
            business is all organized for you.</p>
        </div>
      </div>
    </div> -->
    <!-- 2️⃣ - TRIPLE CARDS END-->


    <!-- 🚀 spacer div 2️⃣-->
    <div class="spacer d-flex align-items-center">
      <!-- DIVIDER LINE -->
      <div class="container mx-5 my-4 px-5 align-items-center">
        <hr class="solid mx-5" style="color: var(--Midnight);">
      </div>
      <!-- DIVIDER LINE -->
    </div>
    <!-- 🚀 spacer div 2️⃣-->
    <!-- <div style="height:5vh;"></div> -->
    <h1 class="text-Midnight Merri">Level 1</h1>
    <!-- 3️⃣ - Horizontal Card DIV -->
    <section class="container elevation-3 my-2 p-4 text-Midnight bg-Seashell rounded">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-8">
          <h2 class="fw-bold text-Midnight lght-txt-shad">The Starter Website Package

            <span type="button" class="" data-toggle="modal" data-target="#StarterSiteModal"><span class="fw-bold
          learn-more bg-Minty rounded"> LEARN MORE </span>
            </span>
          </h2>
          <h4 class="fw-bold lh-1 py-3">Starting at<span class="text-Maritime lght-txt-shad"> $150</span> a month, Your
            Gateway to the Web</h4>

          <!-- CHECK POINTS ROW 1 -->
          <div class="row squish">
            <!-- Infinity 1 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <p class="">
                <span class="med-txt-checks fw-bold">Inclusive Hosting Costs
                </span>
                <br>
                <span class="smol-txt-checks">Your monthly plan encompasses all hosting charges.
                </span>
              </p>
              <!-- check 1 content-->
              <!-- <p class="fw-bold med-txt-checks fw-bold m-0 p-0">Inclusive Hosting Costs</p>

              <p class="smol-txt-checks mt-1 p-0 ">Your monthly plan encompasses all hosting charges.</p> -->

            </div>
            <!-- Infinity 2 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 2 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Unlimited Revisions
                </span>
                <br>
                <span class="smol-txt-checks">Free to request any modifications at any time.
                </span>
              </p>
            </div>
          </div>
          <!-- CHECK POINTS ROW 2 -->
          <div class="row squish">
            <!-- Infinity 3 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 3 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">24/7 Support Access
                </span>
                <br>
                <span class="smol-txt-checks">Here for you when you need us.
                </span>
              </p>
            </div>
            <!-- Infinity 4 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 4 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Comprehensive Crafting
                </span>
                <br>
                <span class="smol-txt-checks">Over 40 hours web design.
                </span>
              </p>
            </div>
          </div>

          <!-- CHECK POINTS ROW 3 -->
          <div class="row squish">
            <!-- Infinity 5 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 5 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Top-Tier Page Ratings
                </span>
                <br>
                <span class="smol-txt-checks">Enhancing
                  your site's visibility.
                </span>
              </p>
            </div>
            <!-- Infinity 6 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-checkbox-marked-circle-outline mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 6 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Complimentary Google Integration
                </span>
                <br>
                <span class="smol-txt-checks">Track your site's performance.</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-10 col-sm-10 text-center">
          <img :src="piggyBank" class="pig-bank"
            alt="Piggy Bank with csoin dropping in and dollar symbol, bring in revenue, make money for your small business, hypnotist therapist"
            title="Simple Stataic Website helps you to Make and Save Money">
          <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
            <span> Call us Today!</span>
            <button type="button"
              class="consult smol-txt-btn btn bg-Aquatic text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
              Free Consult</button>
          </router-link>
        </div>
      </div>
    </section>
    <!-- 3️⃣ - Horizontal Card DIV END -->


    <div style="height:5vh;"></div>

    <h1 class="text-Midnight Merri">Level 2</h1>
    <!-- 4️⃣ - Horizontal Card DIV -->
    <section class="container elevation-3 my-2 p-4 text-Midnight bg-Seashell rounded">
      <div class="row justify-content-center align-items-center">
        <div class="col-12 col-md-8">
          <h2 class="fw-bold text-Midnight lght-txt-shad">The Delta ERP
            <span type="button" class="" data-toggle="modal" data-target="#DeltaERPModal"><span class="fw-bold
          learn-more bg-Minty rounded">LEARN MORE</span>
            </span>
          </h2>
          <h4 class="fw-bold lh-1 py-3"><span>Ultimate Small Business Package, Add-On to the Starter Site Package,
            </span><span class="text-Maritime lght-txt-shad">$50</span>
            a month, six-month
            month minimum contract.</h4>

          <!-- CHECK POINTS ROW 1 -->
          <div class="row squish">
            <!-- Infinity 1 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 1 content-->
              <p class=" fw-bold">
                <span class="med-txt-checks fw-bold">Customer Relationship Manager (CRM)
                </span>
                <br>
                <span class="smol-txt-checks">Easily Manage all of Your Customer Interactions</span>
              </p>
            </div>
            <!-- Infinity 2 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 2 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Calendar Scheduler</span>
                <br>
                <span class="smol-txt-checks">Online Scheduling, Automated Reminders, and More </span>
              </p>
            </div>
          </div>
          <!-- CHECK POINTS ROW 2 -->
          <div class="row squish">
            <!-- Infinity 3 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 3 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Website & Funnel Builder</span>
                <br>
                <span class="smol-txt-checks">Direct Potential Customers to your Site</span>
              </p>
            </div>
            <!-- Infinity 4 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 4 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Membership Portal</span>
                <br>
                <span class="smol-txt-checks">Virtual Training System</span>
              </p>
            </div>
          </div>

          <!-- CHECK POINTS ROW 3 -->
          <div class="row squish">
            <!-- Infinity 5 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 5 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Messaging Capabilities</span>
                <br>
                <span class="smol-txt-checks">Integrated Email, Text, Phone, etc.</span>
              </p>
            </div>
            <!-- Infinity 6 check -->
            <div class="col-1 p-0 mt-1 text-end">
              <i class="mdi mdi-infinity mdi-18px"></i>
            </div>
            <div class="col-4 ps-1 m-0">
              <!-- check 6 content-->
              <p class="">
                <span class="med-txt-checks fw-bold">Online Payments</span>
                <br>
                <span class="smol-txt-checks">Accept and Manage Your Revenue</span>
              </p>
            </div>
          </div>
        </div>
        <!-- MONEY HANDS -->
        <div class="col-lg-3 col-md-10 col-sm-10 text-center">
          <img :src="moneyHands" class="hand-coin"
            alt="Money Hands with coin dropping in and dollar symbol, bring in revenue, make money for your small business, hypnotist therapist"
            title=" Delta ERP helps you to Make and Save Money.">
          <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
            <span> Call us Today!</span>
            <button type="button"
              class="consult smol-txt-btn btn bg-Aquatic text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
              Free Consult</button>
          </router-link>
        </div>
      </div>
      <!-- MONEY HANDS -->
    </section>
    <!-- 4️⃣ - Horizontal Card DIV END -->


    <!-- 🚀 spacer div 3️⃣-->
    <div class="spacer d-flex align-items-center">
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
          <h1 class="fw-bold Playfair">WHO WE ARE</h1>
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
  <!-- MODAL BUTTON-->


  <!-- MODAL -->
  <div class="modal fade" id="StarterSiteModal" tabindex="-1" role="dialog" aria-labelledby="StarterSiteModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content bg-Minty">
        <div class="modal-header border-Midnight-bottom">
          <h5 class="modal-title text-Midnight" id="StarterSiteModalLabel">The <span class="Playfair fw-bold">Renü
              Solutions</span> Starter Website</h5>
          <button type="button" class="close text-Midnight" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-Midnight">
          <p class="text-start fw-medium">Your complete first website package. We build you a beautiful, mobile-first
            website that
            is
            designed to convert visitors into clients. This package is perfect for the small business owner who is just
            starting out and
            needs a
            website that will grow with them.<br><br>
          </p>
          <p class="text-start fw-medium">
          </p>
          <!-- <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
            <span> Call us Today!</span>
            <button type="button"
              class="consult smol-txt-btn btn bg-Aquatic text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
              Free Consult</button>
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL -->
  <!-- MODAL -->
  <div class="modal fade" id="DeltaERPModal" tabindex="-1" role="dialog" aria-labelledby="DeltaERPModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content bg-Minty">
        <div class="modal-header border-Midnight-bottom">
          <h5 class="modal-title text-Midnight" id="DeltaERPModalLabel">The <span class="Playfair fw-bold">Renü
              Solutions</span> Ultimate Small Business
            Management Software </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-Midnight">
          <p class="text-start fw-medium fs-5">What is the Delta ERP or an ERP? ERP stands for
            <span style="text-decoration: underline;">E</span>nterprise
            <span style="text-decoration: underline;">R</span>esource
            <span style="text-decoration: underline;">P</span>lanning
            software.
          </p>
          <p class="text-start fw-medium fs-5">Fancy words for "that thing that runs your business in place of all the
            people
            you would have to hire to do it for you!"<br><br>
            ERPs are systems utilized by businesses to run everything in a systematic and organized
            way. We have taken the <span class="fst-italic">BEST</span> of these systems and made them
            available to small businesses
            like yours, and we call it the <span class="fw-bold fs-5">Delta ERP</span>.<br><br>We have also sprinkled
            <span><i class="mdi mdi-creation-outline"></i></span> in some of our magic to make it even better! Our system
            increases
            revenue for every business that has uses it.<span class=""></span><br><br>Here is a list of the business areas
            it covers for you:<br>● Client
            Management,<br>●
            Scheduling Management,<br>● Payment Processing,<br>● Advertising and Marketing Management,<br>● Training
            Education Platform Management,<br>● Financial Account Department,<br>● Customer Service Management,<br>● And
            so
            much
            more!
          </p>
          <!-- <router-link :to="{ name: 'Contact' }" class="btn lighten-30 text-uppercase fw-bold text-Midnight">
            <span> Call us Today!</span>
            <button type="button"
              class="consult smol-txt-btn btn bg-Aquatic text-Midnight lighten-30 text-uppercase rounded elevation-3 m-3">
              Free Consult</button>
          </router-link> -->
        </div>
      </div>
    </div>
  </div>
  <!-- MODAL -->
</template>

<script>


import RenuSolutionsLogo from '@/assets/img/RenuSolutionsDigitalLabLogoandNameGLOW.svg';
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
/* To Display Navbar over HomePage background image ONLY */
.top-sec-bg-image {
  background-image: url("../assets/img/final-basicbackgroundRenuSolwebready.png");
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
// MODAL HOVER

.learn-more {
  font-size: 10pt;
  text-shadow: var(--Aquatic 2px 2px 1px);
}

.learn-more:hover {
  scale: 1.1;
  font-size: 14pt;
  transition: 0.3s;
  color: var(--Maritime);
  cursor: pointer;
}

// .piggyBank {
//   max-height: 10rem;
//   max-width: 100%;
//   object-fit: cover;
//   object-position: center;
// }

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

.med-txt-checks {
  font-size: med !important;
  line-height: normal;
}

.smol-txt-checks {
  font-size: small !important;
  font-weight: 700 !important;
  line-height: normal;
}

.lrg-txt-msg {
  font-size: large !important;
  font-weight: 800 !important;
  line-height: normal;
}

.lght-txt-shad {
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.235);
}

.txt-shad {
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.694);
}

.renu-glow {
  backdrop-filter: rgba(255, 255, 255, 0.603) !important;
  // backdrop-filter: 1px 1px 1px rgba(255, 255, 255, 0.836);
}

.txt-glow {
  text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.572);
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
@font-face {
  font-family: 'Material Design Icons';
  src: url('docs/assets/materialdesignicons-webfont-c1c004a9.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  /* Use 'swap' or 'fallback' to ensure text remains visible */
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

.spacer {
  height: 18vh;
}

@media screen and (max-width: 768px) {
  .spacer {
    height: 5vh;
  }
}

.pig-bank {
  width: 200px;
  height: 200px;
}

@media screen and (max-width: 768px) {
  .pig-bank {
    width: 100px;
    height: 100px;
  }

}

.hand-coin {
  width: 200px;
  height: 200px;
}

@media screen and (max-width: 768px) {
  .hand-coin {
    width: 100px;
    height: 100px;
  }

}
</style>

<!-- <i class="mdi mdi-pyramid"></i>
<i class="mdi mdi-hours-24"></i>
<i class="mdi mdi-infinity"></i>
<i class="mdi mdi-power-plug"></i> -->