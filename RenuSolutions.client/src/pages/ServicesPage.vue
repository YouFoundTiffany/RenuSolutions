<!-- SERVICES -->
<template>
  <!-- <section class="container-flex mb-3">
    <img :src="Swoop" alt="website layout for small business" class="banner-img">
    <h2 class="centered text-center m-4 p-4 text-Seashell fw-bold lght-txt-shad">Our Services</h2>
  </section> -->


  <section class="container my-2 mt-4">
    <!-- 1️⃣ - TRIPLE CARDS -->
    <div class="row justify-content-around text-center gap-sm-2 gap-lg-0">
      <!-- 🅰️ -->
      <a @click.prevent="scrollTo('static-website')"
        class="col-lg-3 col-md-3 col-sm-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-web fs-1 text-center"></i>
        <h6 class="card-title text-center p-2 m-0">Starter Website</h6>
        <!-- <p class="card-text text-start fw-semibold "></p> -->
      </a>
      <!-- 🅱️ -->
      <a @click.prevent="scrollTo('delta-erp')"
        class="col-lg-3 col-md-3 col-sm-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-package-variant-closed fs-1 text-center"></i>
        <h6 class="card-title text-center p-2 m-0">Delta ERP</h6>
        <!-- <p class="card-text text-start fw-semibold "></p> -->
      </a>
      <!-- 🆎 -->
      <!-- <a @click.prevent="scrollTo('web-apps')"
        class="col-10 col-md-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-apps fs-1 text-center"></i>
        <h6 class="card-title text-center">Web Apps</h6> -->
      <!-- <p class="card-text text-start fw-semibold "></p> -->
      <!-- </a> -->
    </div>
  </section>
  <!-- 1️⃣ - TRIPLE CARDS END-->

  <!-- 🚀 spacer div -->
  <div class="spacer d-flex align-items-center">
    <!-- DIVIDER LINE -->
    <div class="container mx-5 my-4 px-5 align-items-center">
      <hr class="solid mx-5" style="color: var(--Midnight);">
    </div>
    <!-- DIVIDER LINE -->
  </div>
  <!-- 🚀 spacer div -->


  <!-- STATIC WEBSITE -->
  <section id="static-website" class="container gradient-radial-minty p-4 card">
    <section>
      <div class="container m-0 p-0">
        <div class="rounded bg-Minty text-Midnight">
          <h3 class="col-12 mx-3 p-2 fw-semibold p-0 m-0">Static Website Package <span class="fs-6"><br>Ideal
              for
              starter businesses looking to establish an online presence</span></h3>
          <h5 class="col-12 text-center lh-lg">$150 per month, six-month minimum
            contract.
          </h5>
          <h6 class="lh-lg ms-5 ps-5 pb-3">
            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span> We provide comprehensive
            website
            management, guidance, and training for you.<br>
            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span> Our team handles all
            technical
            aspects, updates, and edits for your website, allowing you
            to focus on running your business.<br>
            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span> First month $250.<br>
          </h6>
        </div>
      </div>
    </section>
    <!-- ROW 1-->
    <section class="mt-md-3 text-Midnight">
      <div class="row justify-content-around">
        <!-- 1️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">5 Pages</p>
          <p class="fw-medium ps-2 smol-txt-msg">Home Page, and four more pages of your choosing.
          </p>
        </div>
        <!-- 2️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Online Hosting</p>
          <p class="fw-medium ps-2 smol-txt-msg">You own your domain and content.
          </p>
        </div>
        <!-- 3️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">24/7 Support</p>
          <p class="fw-medium ps-2 smol-txt-msg">Direct Line to us. After-hours, we respond in 24 hours or less—no extra
            charges for evenings or weekends.
          </p>
        </div>
      </div>
    </section>
    <!-- ROW 2 -->
    <section class="mt-md-3">
      <div class="row justify-content-around">
        <!-- 4️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Logo and Web Copy</p>
          <p class="fw-medium ps-2 smol-txt-msg">The logo includes two phase edits. If you need help to create content on
            your Home Page, we will provide high-quality starter web copy with your specific industry's keywords. We
            provide guides for creating your niche web copy
          </p>
        </div>
        <!-- 5️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">SEO Optimization</p>
          <p class="fw-medium ps-2 smol-txt-msg"><span style="text-decoration: underline;">S</span>earch
            <span style="text-decoration: underline;">E</span>ngine <span
              style="text-decoration: underline;">O</span>ptimization makes a website more attractive and visible to
            search engines, helping it appear higher in search results when people look for related topics online. We
            manage and review your needs monthly.
          </p>
        </div>
        <!-- 6️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Full-Service Management</p>
          <p class="fw-medium ps-2 smol-txt-msg">Unlimited Edits are edits after the site is up and running. When you want
            to change a messaging, copy, or formatting, we provide up to 2 hours of editing per month; anything over that,
            we charge a $25 hourly rate.</p>
        </div>
      </div>
    </section>
    <!-- ROW 3 -->
    <section class="mt-md-3">
      <div class="row justify-content-around">
        <!-- 7️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Mobile-First</p>
          <p class="fw-medium ps-2 smol-txt-msg">We build your site for mobile device viewing first. Your site will fit
            all mobile screens and desktop screens.</p>
        </div>
        <!-- 8️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Google Analytics</p>
          <p class="fw-medium ps-2 smol-txt-msg">We install Google Analytics on your site. Google
            Analytics is a free service offered by Google that tracks and reports website traffic.</p>
        </div>
        <!-- 9️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0 p-0 m-0">Email Integration</p>
          <p class="fw-medium ps-2 smol-txt-msg">We ensure your email is connected along with any other integrations you
            already have.</p>
        </div>
      </div>
      <p class="container fst-italic fw-semibold text-light smol-txt-msg mt-2 pt-1">*cancel anytime with
        no penalty or hassle
      </p>
    </section>
  </section>
  <!-- STATIC WEBSITE -->

  <!-- 🚀 spacer div -->
  <div class="spacer d-flex align-items-center">
    <!-- DIVIDER LINE -->
    <div class="container mx-5 my-4 px-5 align-items-center">
      <hr class="solid mx-5" style="color: var(--Midnight);">
    </div>
    <!-- DIVIDER LINE -->
  </div>
  <!-- 🚀 spacer div -->

  <!-- DELTA ERP -->

  <section id="delta-erp" class="container gradient-radial-midnight p-4 card">
    <section>
      <div class="container m-0 p-0">
        <div class="rounded bg-Minty text-Midnight">
          <h3 class="col-11 mx-3 p-2 fw-semibold p-0 m-0" id="static-website">Delta ERP Package <span class="fs-5">
            </span> <span class="fs-6"><br>A complete business solution that integrates every essential tool to run
              your business</span></h3>
          <h5 class="col-11 text-center lh-lg">$50 per month, six-month minimum contract,<br>
          </h5>
          <h6 class="lh-lg ms-5 ps-5 pb-3">
            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span>Delta ERP is an Add-On
            to your
            website package for a complete business solution.<br>
            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span> Our team handles all
            technical
            aspects, updates, and edits for your website, allowing you
            to focus on running your business.<br>
          </h6>
        </div>
      </div>
    </section>
    <!-- ROW 1-->
    <section class="mt-md-3">
      <div class="row justify-content-around">
        <!-- 1️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Customer Relationship Manager (CRM)</p>
          <p class="fw-medium ps-2 smol-txt-msg">An essential tool to manage your customers, leads, and sales.
          </p>
        </div>
        <!-- 2️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Calendar Scheduler</p>
          <p class="fw-medium ps-2 smol-txt-msg">Customers can request appointments, and you can manage your
            schedule.
          </p>
        </div>
        <!-- 3️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Messaging Capabilities</p>
          <p class="fw-medium ps-2 smol-txt-msg">Additional messaging capabilities to communicate with your
            customers. Email Marketing Campaigns, SMS, and more.
          </p>
        </div>
      </div>
    </section>
    <!-- ROW 2 -->
    <section class="mt-md-3">
      <div class="row justify-content-around">
        <!-- 4️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Sales and Opportunity Tracking</p>
          <p class="fw-medium ps-2 smol-txt-msg">Manage your sales and opportunities.
          </p>
        </div>
        <!-- 5️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Online Payments</p>
          <p class="fw-medium ps-2 smol-txt-msg">Accept and manage online payments.
          </p>
        </div>
        <!-- 6️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Customer Courses</p>
          <p class="fw-medium ps-2 smol-txt-msg">Create Courses for your customers and manage your additional income
            stream.</p>
        </div>
      </div>
    </section>
    <!-- ROW 3 -->
    <section class="mt-md-3">
      <div class="row justify-content-around">
        <!-- 7️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Marketing Funnel</p>
          <p class="fw-medium ps-2 smol-txt-msg">Add a marketing funnel to bring customers to your business efficiently.
          </p>
        </div>
        <!-- 8️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Business Analytics</p>
          <p class="fw-medium ps-2 smol-txt-msg">Automated Business Reporting that details your business. No more
            wondering how you
            are doing, you will know!</p>
        </div>
        <!-- 9️⃣ -->
        <div
          class="col-11 col-md-3 card bg-Minty text-Midnight elevation-3 pt-2 ps-1 mb-2 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0 p-0 m-0">Reputation Management</p>
          <p class="fw-medium ps-2 smol-txt-msg">See and track all your customer reviews in one place.</p>
        </div>
      </div>
      <p class="container fst-italic fw-semibold text-light smol-txt-msg mt-2 pt-1">*cancel anytime with
        no penalty or hassle
      </p>
    </section>
  </section>


  <!-- 🚀 spacer div -->
  <div class="spacer d-flex align-items-center">
    <!-- DIVIDER LINE -->
    <div class="container mx-5 my-4 px-5 align-items-center">
      <!-- <hr class="solid mx-5" style="color: var(--Midnight);"> -->
    </div>
    <!-- DIVIDER LINE -->
  </div>
  <!-- 🚀 spacer div -->
  <!-- DELTA ERP -->
</template>

<script>
import Swoop from '@/assets/img/final-basicbackgroundRenuSol.png';
export default {
  setup() {
    return {
      Swoop,

      scrollTo(id) {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }

    }
  }
}
</script>
<style>
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

@media screen and (max-width: 768px) {

  .centered {
    font-size: 24pt;
  }
}

/* Text Over Image */

/* // Card hover effect */
.onhvr:hover {
  scale: 1.1;
  transition: 0.3s;
}

/* // Card hover effect */
/* bullet points column smaller. */
.icon-column {
  flex: 0 0 auto;
  /* Do not grow or shrink */
  width: 2%;
  /* Set a fixed width as needed */
}

/* Bullet Points Hover */
.grow-bullets:hover {
  transition: 0.3s !important;
  scale: 1.1;
}

@media (max-width: 768px) {
  .grow-bullets:hover {
    transition: 0.3s !important;
    scale: 1.02;
  }


}

/* smol font */
.smol-txt-msg {
  font-size: small !important;
  /* font-weight: 800 !important; */
}
</style>
