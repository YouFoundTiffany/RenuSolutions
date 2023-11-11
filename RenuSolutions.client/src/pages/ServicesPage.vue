<!-- SERVICES -->
<template>
  <section class="container my-2 mt-4">
    <h1 class="text-center m-4 p-4">Our Services</h1>

    <!-- 1️⃣ - TRIPLE CARDS -->
    <div class="row justify-content-around text-center gap-sm-2 gap-lg-0">

      <!-- 🅰️ -->
      <a @click.prevent="scrollTo('static-website')"
        class="col-10 col-md-3 cad mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-web fs-1 text-center"></i>
        <h6 class="card-title text-center">Static Website</h6>
        <!-- <p class="card-text text-start fw-semibold smol-txt-checks"></p> -->
      </a>

      <!-- 🅱️ -->
      <a @click.prevent="scrollTo('delta-erp')"
        class="col-10 col-md-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-package-variant-closed fs-1 text-center"></i>
        <h6 class="card-title text-center">Delta ERP</h6>
        <!-- <p class="card-text text-start fw-semibold smol-txt-checks"></p> -->
      </a>

      <!-- 🆎 -->
      <a @click.prevent="scrollTo('web-apps')"
        class="col-10 col-md-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-apps fs-1 text-center"></i>
        <h6 class="card-title text-center">Web Apps</h6>
        <!-- <p class="card-text text-start fw-semibold smol-txt-checks"></p> -->
      </a>
    </div>

    <!-- 🚀 spacer div -->
    <div class="spacer d-flex align-items-center" style="height: 30vh;">
      <!-- DIVIDER LINE -->
      <div class="container mx-5 my-4 px-5 align-items-center">
        <hr class="solid mx-5" style="color: var(--Midnight);">
      </div>
      <!-- DIVIDER LINE -->
    </div>
    <!-- 🚀 spacer div -->


    <!-- 1️⃣ - TRIPLE CARDS END-->
  </section>
  <!-- Content -->
  <section>
    <div class="container">
      <div class="row">
        <!-- healine -->
        <h3 id="static-website">Static Website : What do you get?</h3>
        <!-- healine -->

        <!-- List Left -->
        <!-- icon column 1 +1-->
        <div class="col-1 m-0 p-0 text-end">
          <i class="mdi mdi-web"></i>
        </div>
        <!-- bullet Point column 4 +1-->
        <div class="col-3 m-0 p-0">
          <!-- check 2 content-->
          <p class="">
            <span class="smol-txt-checks fw-bold">Calendar Scheduler</span>
            <br>
            <span class="xsmol-txt-checks">Online Scheduling, Automated Reminders, and More </span>
          </p>
          <!-- List Left -->

          <!-- List center -->
        </div>
        <div class="col-1 m-0 p-0 text-end">

          <i class="mdi mdi-web"></i>
        </div>
        <div class="col-3 m-0 p-0">
          <!-- check 2 content-->
          <p class="">
            <span class="smol-txt-checks fw-bold">Calendar Scheduler</span>
            <br>
            <span class="xsmol-txt-checks">Online Scheduling, Automated Reminders, and More </span>
          </p>
        </div>
        <!-- List center -->

        <!-- List right -->
        <div class="col-1 m-0 p-0 text-end">

          <i class="mdi mdi-web"></i>
        </div>
        <div class="col-3 m-0 p-0">
          <!-- check 2 content-->
          <p class="">
            <span class="smol-txt-checks fw-bold">Calendar Scheduler</span>
            <br>
            <span class="xsmol-txt-checks">Online Scheduling, Automated Reminders, and More </span>
          </p>
        </div>
        <!-- List right -->

        <!-- Details -->
        <p>Starting at $150 per Month,
          6 month Minimum Contract
          The Simple Static Website
          Inclusive Hosting Costs
          Your monthly plan encompasses all hosting charges.

          Unlimited Revisions & Round-the-Clock Support
          Feel free to request any modifications at any time, and expect completion within the same day.

          Direct 24/7 Support Access
          Contact us directly at any hour—avoiding automated menus and getting immediate human assistance.

          Comprehensive Web Crafting
          Our package offers over 40 hours dedicated to meticulous web design, development, and rigorous quality checks.

          Top-Tier Google Page Speed Ratings
          Attain an impeccable score in Google Page Speed insights, enhancing your site's visibility.

          Complimentary Google Analytics Integration
          We provide a complimentary setup of Google Analytics to track your website's traffic sources and visitor
          behavior.
        </p>
        <!-- Details -->

      </div>




      <h3 id="delta-erp">Delta ERP</h3>
      <p>The Renü Solutions Delta ERP
        What is the Delta ERP or an ERP? ERP stands for Enterprise Resource Planning software.

        ERPs are systems utilized by medium and large businesses to run everything in a systematic and organized way. We
        have taken the BEST of these systems and made them available to small businesses like yours, which is what we call
        the Delta ERP.

        We have also added in some of our own special sauce to make it even better. We have seen it increase revenue for
        every business that has used it.</p>
      <p>Delta ERP is $50 per Month,
        6 month Minimum Contract
        The Delta ERP
        Customer Relationship Manager (CRM)
        Details

        Calendar Scheduler
        Details

        Website & Funnel Builder
        Details

        Membership Portal
        Details

        Messaging Capabilities (i.e. email, text, phone, etc.)
        Details</p>
      <p>Delta ERP additional add-on products</p>
      <h3 id="web-apps">Web App Developement</h3>
      <p>Web application development is the process of creating application programs that reside on remote servers and are
        delivered to the user's device over the Internet. Unlike traditional desktop applications, which are launched by
        your operating system, web apps are accessed through a web browser. This approach to software development has
        numerous advantages, including the ability to update and maintain web applications without distributing and
        installing software on potentially thousands of client computers. Web apps can be simple tools like email clients
        or complex software such as project management tools, financial systems, or customer relationship management
        solutions. The development process typically involves web design, web content development, client-side/server-side
        scripting, and network security configuration, among other tasks.</p>
    </div>
  </section>
  <!-- Content -->
</template>

<script>
export default {
  setup() {
    return {


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
/* // Card hover effect */
.onhvr:hover {
  scale: 1.1;
  transition: 0.3s;
}

/* // Card hover effect */
</style>
