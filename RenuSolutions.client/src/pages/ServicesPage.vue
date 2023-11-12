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
        <!-- <p class="card-text text-start fw-semibold "></p> -->
      </a>
      <!-- 🅱️ -->
      <a @click.prevent="scrollTo('delta-erp')"
        class="col-10 col-md-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-package-variant-closed fs-1 text-center"></i>
        <h6 class="card-title text-center">Delta ERP</h6>
        <!-- <p class="card-text text-start fw-semibold "></p> -->
      </a>
      <!-- 🆎 -->
      <a @click.prevent="scrollTo('web-apps')"
        class="col-10 col-md-3 card mb-3 elevation-3 text-Midnight align-items-center justify-content-center onhvr">
        <i class="mdi mdi-apps fs-1 text-center"></i>
        <h6 class="card-title text-center">Web Apps</h6>
        <!-- <p class="card-text text-start fw-semibold "></p> -->
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

  <!-- STATIC WEBSITE -->
  <section class="container gradient-radial-minty p-4 card">
    <section>
      <div class="container m-0 p-0">
        <div class="rounded bg-Minty text-Midnight">
          <!-- healine -->
          <h3 class="col-12 mx-3 p-2 fw-semibold p-0 m-0" id="static-website">Static Website Package <span
              class="fs-6">Ideal
              for
              starter businesses looking to establish an online presence</span></h3>
          <h5 class="col-12 text-center lh-lg">$150 per month, first month $250, six month minimum
            contract,<br><span class="fst-italic fw-semibold">cancel
              anytime</span>
            with
            no penalty or
            hassle.
          </h5>
          <h6 class="lh-lg ms-5 ps-5 pb-3">
            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span> We provide comprehensive
            website
            management, guidence, and training for you.<br>

            <span class="icon-indent"><i class="mdi mdi-hand-pointing-right mdi-18px"></i></span> Our team handles all
            technical
            aspects, updates, and edits for your website, allowing you
            to focus on running your business.<br>
          </h6>
        </div>
      </div>
    </section>

    <!-- healine -->
    <!-- ROW 1-->
    <section class="mt-3">
      <div class="row justify-content-around">
        <!-- 1️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">5 Pages</p>
          <p class="fw-medium ps-2 smol-txt-msg">Home Page, and four more pages of your choosing.
          </p>
        </div>
        <!-- 2️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Online Hosting</p>
          <p class="fw-medium ps-2 smol-txt-msg">You own your domain, and content. Custom everything.
            Free Web
            Copy.
          </p>
        </div>
        <!-- 3️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">24/7 Support</p>
          <p class="fw-medium ps-2 smol-txt-msg">Direct Line to us. After-hours we respond in 24 hours or
            less. No
            extra
            charges
            for evenings or weekends.
          </p>
        </div>
      </div>
    </section>
    <!-- ROW 2 -->
    <section class="mt-3">
      <div class="row justify-content-around">
        <!-- 4️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Logo and Web Copy</p>
          <p class="fw-medium ps-2 smol-txt-msg">Logo includes two phase edits. If you are struggling to
            create
            content
            on your
            Home Page we will provide high quality starter web copy with your industry's applicable keywords. We provide
            guides for creating your niche webcopy.
          </p>
        </div>



        <!-- 5️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">SEO Optimization</p>
          <p class="fw-medium ps-2 smol-txt-msg"><span style="text-decoration: underline;">S</span>earch
            <span style="text-decoration: underline;">E</span>ngine <span
              style="text-decoration: underline;">O</span>ptimization
            is the practice of making a website more
            attractive and visible to search engines, helping it show up higher in search results when people look for
            related topics online. We manage and review your needs on a monthly basis.
          </p>
        </div>
        <!-- 6️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Full Service Management</p>
          <p class="fw-medium ps-2 smol-txt-msg">Unlimited Edits are edits after the site is up and running. When you want
            to change a messaging, copy or formatting. We provide up to 2 hours of editing per month, anything over that
            we charge an $25 hourly rate.</p>
        </div>
      </div>
    </section>
    <!-- ROW 3 -->
    <section class="mt-3">
      <div class="row justify-content-around">
        <!-- 7️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Mobile-First</p>
          <p class="fw-medium ps-2 smol-txt-msg">We build your site for mobile device viewing first. Your site will fit
            all mobile screens and desktop screens.</p>
        </div>
        <!-- 8️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0">Google Analytics</p>
          <p class="fw-medium ps-2 smol-txt-msg">We install Google Analytics on your site. Google
            Analytics is a free service offered by Google that tracks and reports website traffic.</p>
        </div>
        <!-- 9️⃣ -->
        <div class="col-12 col-md-3 card bg-Minty elevation-3 pt-2 ps-1 align-items-center grow-bullets">
          <p class="fw-semibold p-0 m-0 p-0 m-0">Email Integration</p>
          <p class="fw-medium ps-2 smol-txt-msg">We ensure your email is connected along with any other integrations you
            already have.</p>
        </div>
      </div>
    </section>
  </section>
  <!-- END OF BULLET POINTS -->


  <!-- Details -->
  <section>

    <h3 id="delta-erp">Delta ERP</h3>
    <p>The Renü Solutions Delta ERP
      What is the Delta ERP or an ERP? ERP stands for Enterprise Resource Planning software.

      ERPs are systems utilized by medium and large businesses to run everything in a systematic and organized way. We
      have taken the BEST of these systems and made them available to small businesses like yours, which is what we
      call
      the Delta ERP.

      We have also added in some of our own special sauce to make it even better. We have seen it increase revenue for
      every business that has used it.</p>
    <p>Delta ERP is $50 per Month,
      Six Month Minimum Contract
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
    <p>Web application development is the process of creating application programs that reside on remote servers and
      are
      delivered to the user's device over the Internet. Unlike traditional desktop applications, which are launched by
      your operating system, web apps are accessed through a web browser. This approach to software development has
      numerous advantages, including the ability to update and maintain web applications without distributing and
      installing software on potentially thousands of client computers. Web apps can be simple tools like email
      clients
      or complex software such as project management tools, financial systems, or customer relationship management
      solutions. The development process typically involves web design, web content development,
      client-side/server-side
      scripting, and network security configuration, among other tasks.</p>

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

/* smol font */
.smol-txt-msg {
  font-size: small !important;
  /* font-weight: 800 !important; */
}
</style>
