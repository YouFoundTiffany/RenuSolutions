<!-- CONTACT -->
<template>
  <section class="container-flex mb-3">
    <img :src="Swoop" alt="website layout for small business" class="banner-img">
    <h1 class="centered text-center m-4 p-4 text-Seashell fw-bold lght-txt-shad">Contact US</h1>
  </section>

  <!-- Button trigger modal -->
  <section class="container-flex m-2 py-5 text-Midnight fw-medium">
    <!-- Left -->
    <h5 class="card-title text-center py-3">Feel free to call, text, or email. </h5>
    <div class="container">
      <p class="text-center fw-medium">We are happy to provide more information. Schedule your compilementary discovery
        session
        now!
      </p>
      <div class="row">
        <div class="col-12 col-md-6 py-5">
          <div class="text-center">
            <p class="m-0 p-0">Ask us a Question</p>
            <button type="button" class="btn m-lg-0 m-md-0 my-4 btn-grow" data-toggle="modal"
              data-target="#contactUsModal" style="background-color: var(--Maritime); color: var(--Minty);">
              Contact Form
            </button>
          </div>
        </div>

        <!-- Right -->
        <div class="col-12 col-md-6 m-lg-0 m-md-0 my-4 d-flex text-Midnight fw-medium align-items-center py-5">
          <div class="elevation-3 bg-Seashell rounded p-4">
            <div class="card-body">
              <h2 class="card-text Playfair">Renü Solutions <span class="Monty"> Digital Lab</span></h2>
              <p class="card-text">Call or Text: <span><a href="tel:+12089180942">(208) 918-0942</a></span><br>Email:
                Info@RenuSolutions.tech<br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- MODAL -->
  <!-- MODAL HEADER -->
  <div class="modal fade" id="contactUsModal" tabindex="-1" role="dialog" aria-labelledby="contactUsModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <!-- <div class="modal-header"> -->
        <!-- <h5 class="modal-title" id="contactUsModalLabel">Modal title</h5> -->
        <!-- <button type="button" class="close" data-dismiss="modal" aria-label="Close"> -->
        <!-- <span aria-hidden="true">&times;</span> -->
        <!-- </button> -->
        <!-- </div> -->
        <!-- <div class="modal-body"> -->
        <!--  END MODAL HEADER -->
        <!-- MODAL BODY CONTACT US FORM -->
        <div class="container-flex">
          <div class="card mx-auto" style="max-width: 500px; background-color: var(--Maritime);">
            <div class="card-body">
              <h3 class="card-title text-center" style="color: var(--Minty);">Contact Us</h3>

              <form @submit.prevent="createContact" class="mt-4">
                <div class="mb-3">
                  <label for="name" class="form-label" style="color: var(--Aquatic);">Name</label>
                  <input type="text" class="form-control" id="name" v-model="contactData.name" required
                    style="background-color: var(--Minty);" minlength="3" maxlength="59">
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label" style="color: var(--Aquatic);">Email</label>
                  <input type="email" class="form-control" id="email" v-model="contactData.email" required
                    style="background-color: var(--Minty);" minlength="3" maxlength="59">
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label" style="color: var(--Aquatic);">Phone</label>
                  <input type="phone" class="form-control" id="phone" v-model="contactData.phone" required
                    style="background-color: var(--Minty);" minlength="3" maxlength="59">
                </div>
                <div class="mb-3">
                  <label for="message" class="form-label" style="color: var(--Aquatic);">Message</label>
                  <textarea class="form-control" id="message" rows="3" v-model="contactData.message" required
                    style="background-color: var(--Minty);" minlength="3" maxlength="200"></textarea>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <!-- END MODAL BODY CONTACT US FORM -->
        <!-- MODAL FOOTER -->
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
  <!-- </div> -->
  <!-- MODAL END -->
</template>

<script >
import Swoop from '@/assets/img/final-basicbackgroundRenuSol.png';
import Pop from '../utils/Pop.js';
import { nextTick } from 'vue';
export default {

  data() {
    return {
      Swoop: Swoop,
      contactData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      googleFormUrl: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSdnZbZgR8i78Zw5cvnRUa2pInXz-19v6nt4QvZFISUARc_odQ/formResponse"
    };
  },
  methods: {
    createContact() {
      const formData = new FormData();
      formData.append('entry.1793138634', this.contactData.name);
      formData.append('entry.227427169', this.contactData.email);
      formData.append('entry.1942162986', this.contactData.phone);
      formData.append('entry.1139891264', this.contactData.message);

      fetch(this.googleFormUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      }).then(() => {
        this.contactData = { name: '', email: '', message: '' };
        Pop.success('Message Sent!')
        nextTick(() => {
          let modalElement = document.getElementById('contactUsModal');
          if (modalElement) {
            modalElement.classList.remove('show');
            modalElement.style.display = 'none';
            document.body.classList.remove('modal-open');
            document.querySelector('.modal-backdrop').remove();
          }
        });
      }).catch(error => {
        Pop.error('Error:', error);
      });
    }
  }
}

</script>
<style>
.btn-grow:hover {
  background-color: var(--Aquatic) !important;
  color: var(--Minty) !important;
  transition: 0.3s !important;
  scale: 1.2;
}

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
#contactUsModal .btn[type="submit"] {
  background-color: var(--Aquatic) !important;
  /* Replace with your desired color */
  color: var(--Minty) !important;
  /* Replace with your desired color */
}

#contactUsModal .btn[type="submit"]:hover {
  background-color: var(--Minty) !important;
  /* Color on hover */
  color: var(--Midnight) !important;
  /* Text color on hover */
}
</style>