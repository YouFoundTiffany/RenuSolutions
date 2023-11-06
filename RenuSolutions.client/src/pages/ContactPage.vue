<!-- CONTACT -->
<template>
  <div class="contact-us">

    <div class="container py-5">
      <div class="card mx-auto" style="max-width: 500px; background-color: var(--Abyss);">
        <div class="card-body">
          <h3 class="card-title text-center" style="color: var(--Minty);">Contact Us</h3>
          <form @submit.prevent="submitForm" class="mt-4">
            <div class="mb-3">
              <label for="name" class="form-label" style="color: var(--Aquatic);">Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required
                :style="{ backgroundColor: form.nameFocused ? 'var(--Minty)' : '', color: form.nameFocused ? 'var(--Abyss)' : '' }"
                @focus="form.nameFocused = true" @blur="form.nameFocused = false">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label" style="color: var(--Aquatic);">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required
                :style="{ backgroundColor: form.emailFocused ? 'var(--Minty)' : '', color: form.emailFocused ? 'var(--Abyss)' : '' }"
                @focus="form.emailFocused = true" @blur="form.emailFocused = false">
            </div>
            <div class="mb-3">
              <label for="message" class="form-label" style="color: var(--Aquatic);">Message</label>
              <textarea class="form-control" id="message" rows="3" v-model="form.message" required
                :style="{ backgroundColor: form.messageFocused ? 'var(--Minty)' : '', color: form.messageFocused ? 'var(--Abyss)' : '' }"
                @focus="form.messageFocused = true" @blur="form.messageFocused = false"></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn"
                style="background-color: var(--Maritime); color: var(--Minty);">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { contactsService } from '../services/ContactsService.js'
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import { reportsService } from '../services/ReportsService.js'
import { AppState } from '../AppState.js';

const contactData = ref({})


onMounted(() => {
  resetForm()
})

async function createContact() {
  try {
    await contactsService.createContact(contactData.value)
    Pop.success('Created Report')
    resetForm()
  } catch (error) {
    Pop.error(error)
  }
}
function resetForm() {
  contactData.value = {}
}

</script>
