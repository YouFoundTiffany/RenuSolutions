<!-- CONTACT -->
<template>
  <!-- Button trigger modal -->


  <section class="container-flex py-5">
    <!-- Left -->
    <!-- <h5 class="card-title text-center">Feel free to call, text, or email. </h5> -->
    <div class="container">
      <p class="text-center fw-medium">We are happy to provide more information. Schedule your compilementary discovery
        session
        now!
      </p>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class=" text-center">
            <button type="button" class="btn" data-toggle="modal" data-target="#contactUsModal"
              style="background-color: var(--Maritime); color: var(--Minty);">
              Contact Us
            </button>
          </div>
        </div>

        <!-- Right -->
        <div class="col-12 col-md-6 d-flex align-items-center">
          <div class=" text-center w-100">
            <div class="card-body">
              <h4 class="card-text">Renü Solutions Digital Lab</h4>
              <p class="card-text">Call or Text: (208) 918-0942<br>Email: Info@RenuSolutions.tech<br>
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
              <!-- google form url https://docs.google.com/forms/d/e/1FAIpQLSdnZbZgR8i78Zw5cvnRUa2pInXz-19v6nt4QvZFISUARc_odQ/viewform?usp=sf_link -->

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
                  <button type="submit" class="btn"
                    style="background-color: var(--Maritime); color: var(--Minty);">Submit</button>
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

import Pop from '../utils/Pop.js';
import { nextTick } from 'vue';
export default {
  data() {
    return {
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
