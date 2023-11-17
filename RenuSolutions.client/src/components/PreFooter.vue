<template>
    <section class='container-flex gradient-midnight-maritime-aquatic my-2 p-0 SideEye'>
        <div class='row justify-content-around pt-3 text-center'>
            <div class="col-12 col-md-3">
                <router-link :to="{ name: 'Home' }" class="">
                    <img :src="renuLogo" class="p-3" style="object-fit: cover; object-position: center; max-height: 25vh;"
                        height="138" width="126.59" alt="Renu Solutions Digital Lab Web Development rising phoenix in shades of navy blue to teal
                        with ditigal artifacts in circle">
                </router-link>
                <p>Email Info@RenuSolutions.tech</p>
                <p>Call Text (208) 918-0942</p>
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#footContactUsModal"
                    style="background-color: var(--Maritime); color: var(--Minty);">
                    Contact Us
                </button>
            </div>
            <!-- 🚀SPACER DIV -->
            <div class="col-3">
            </div>
            <!-- 🚀SPACER DIV -->


            <!-- 🐕‍🦺 SERVICES -->
            <div class="col-12 col-md-1 text-center glass-effect">
                <p class="ftsTitleUnderlineServ pt-1 m-0 fw-bold txt-shad">SERVICES</p>
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">WEBSITES</p>
                </router-link>
                <router-link :to="{ name: 'Portfolio' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">WEB DESIGN</p>
                </router-link>
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">MAINTENANCE</p>
                </router-link>
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">SEO</p>
                </router-link>
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">CONTENT CREATION</p>
                </router-link>
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">LOGOS</p>
                </router-link>
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerServ text-light pt-1 txt-shad">APPS</p>
                </router-link>
            </div>
            <!-- 🧭 NAVIGATION -->
            <div class="col-12 col-md-1 text-center glass-effect">
                <p class="ftsTitleUnderlineNav pt-1 m-0 fw-bold txt-shad">NAVIGATION</p>
                <router-link :to="{ name: 'Home' }">
                    <p class="borderLinerNav text-light pt-1 txt-shad">HOME</p>
                </router-link>
                <!-- <router-link :to="{ name: 'About' }">
                    <p class="borderLinerNav text-light txt-shad">ABOUT</p>
                </router-link> -->
                <router-link :to="{ name: 'Services' }">
                    <p class="borderLinerNav text-light txt-shad">SERVICES</p>
                </router-link>
                <router-link :to="{ name: 'Portfolio' }">
                    <p class="borderLinerNav text-light txt-shad">PORTFOLIO</p>
                </router-link>
                <!-- <router-link :to="{ name: 'Blog' }">
                    <p class="borderLinerNav text-light txt-shad">BLOG</p>
                </router-link> -->
                <router-link :to="{ name: 'Contact' }">
                    <p class="borderLinerNav text-light txt-shad">CONTACT</p>
                </router-link>
            </div>
        </div>



        <!-- bottom row -->
        <div class='row pt-3 pb-2 m-0 text-center SideEye'>
            <!-- <p class="privpoli mb-0 p-0">PRIVACY POLICY</p> -->
        </div>
    </section>
    <!-- MODAL -->
    <!-- MODAL HEADER -->
    <div class="modal fade" id="footContactUsModal" tabindex="-1" role="dialog" aria-labelledby="footContactUsModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- <div class="modal-header"> -->
                <!-- <h5 class="modal-title" id="footContactUsModalLabel">Modal title</h5> -->
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
                                    <textarea class="form-control" id="message" rows="3" v-model="contactData.message"
                                        required style="background-color: var(--Minty);" minlength="3"
                                        maxlength="200"></textarea>
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
<script>
import RenuLogo from '@/assets/img/RenuLogoSmall.png';
import Pop from '../utils/Pop.js';
import { nextTick } from 'vue';
export default {
    data() {
        return {
            renuLogo: RenuLogo,
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
                    let modalElement = document.getElementById('footContactUsModal');
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


<style scoped lang="scss">
// glass effect
.glass-effect {
    backdrop-filter: brightness(110%) !important;
    border-radius: 20px !important;
}

// TEXT SHADOW
.txt-shad {
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.694);
}

/* TITLE STATIC UNDERLINE */
.privpoli:hover {
    color: var(--Midnight);
    cursor: pointer;
}

/* UNDERLINE SERVICES */
.ftsTitleUnderlineServ {
    border-bottom: 1px solid var(--Aquatic);
    font-size: small;
}

/* UNDERLINE SERVICES */
/* UNDERLINE NAVIGATION */
.ftsTitleUnderlineNav {
    border-bottom: 1px solid var(--Maritime);
    font-size: small;
}

/* UNDERLINE NAVIGATION */

/* ANIMATED UNDERLINE SERVICES */
.borderLinerServ {
    border: none;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 99%;
    margin-left: 1%;
}

.borderLinerServ::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
    background-color: white;
    transition: all ease-in-out 0.2s;
}

.borderLinerServ:hover::after {
    width: 100%;
    left: 0;
}

/* ANIMATED UNDERLINE SERVICES */
/* ANIMATED UNDERLINE NAVIGATION */
.borderLinerNav {
    border: none;
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 79%;
    margin-left: 9%;
}

.borderLinerNav::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
    background-color: white;
    transition: all ease-in-out 0.2s;
}

.borderLinerNav:hover::after {
    width: 100%;
    left: 0;
}

#footContactUsModal .btn[type="submit"] {
    background-color: var(--Aquatic) !important;
    /* Replace with your desired color */
    color: var(--Minty) !important;
    /* Replace with your desired color */
}

#footContactUsModal .btn[type="submit"]:hover {
    background-color: var(--Minty) !important;
    /* Color on hover */
    color: var(--Midnight) !important;
    /* Text color on hover */
}
</style>
