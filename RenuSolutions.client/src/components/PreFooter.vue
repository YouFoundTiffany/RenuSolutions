<template>
    <section class='container-flex gradient-midnight-maritime-aquatic my-2 p-0 SideEye'>
        <div class='row justify-content-around pt-3 text-center'>
            <div class="col-12 col-md-3">
                <router-link :to="{ name: 'Home' }" class="">
                    <img :src="renuLogo" alt="Renu Logo" class="p-3"
                        style="object-fit: cover; object-position: center; max-height: 25vh;">
                </router-link>
                <p>Email Info@RenuSolutions.tech</p>
                <p>Call Text (208) 918-0942</p>
            </div>

            <!-- 🚀SPACER DIV -->
            <div class="col-3">
            </div>
            <!-- 🚀SPACER DIV -->


            <!-- 🐕‍🦺 SERVICES -->
            <!-- <section class="glass-effect m-0 p-0"> -->
            <div class="col-12 col-md-1 text-center rounded">
                <!-- <p class="ftsTitleUnderlineServ pt-1 m-0 fw-bold txt-shad">SERVICES</p> -->
                <!-- <router-link :to="{ name: 'WEBSITES' }">
                    <p class="borderLinerServ text-light pt-1">WEBSITES</p>
                </router-link> -->
                <!-- <p class="borderLinerServ text-light txt-shad pt-1">WEBSITES</p>
                <p class="borderLinerServ text-light txt-shad">WEB DESIGN</p>
                <p class="borderLinerServ text-light txt-shad">MAINTENANCE</p>
                <p class="borderLinerServ text-light txt-shad">SEO</p>
                <p class="borderLinerServ text-light txt-shad">CONTENT CREATION</p>
                <p class="borderLinerServ text-light txt-shad">LOGOS</p>
                <p class="borderLinerServ text-light txt-shad">APPS</p> -->
            </div>
            <!-- 🧭 NAVIGATION -->
            <div class="col-12 col-md-1 text-center glass-effect rounded">
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
                <!-- <router-link :to="{ name: 'Portfolio' }">
                    <p class="borderLinerNav text-light txt-shad">PORTFOLIO</p>
                </router-link> -->
                <!-- <router-link :to="{ name: 'Blog' }">
                    <p class="borderLinerNav text-light txt-shad">BLOG</p>
                </router-link> -->
                <router-link :to="{ name: 'Contact' }">
                    <p class="borderLinerNav text-light txt-shad">CONTACT</p>
                </router-link>
            </div>
            <!-- </section> -->




        </div>



        <!-- bottom row -->
        <div class='row pt-3 pb-2 m-0 text-center SideEye'>
            <!-- <p class="privpoli mb-0 p-0">PRIVACY POLICY</p> -->
        </div>
    </section>
</template>
<script>
import RenuLogo from '@/assets/img/RenuLogoMockUp.png';

export default {
    setup() {
        return {
            renuLogo: RenuLogo,
        };
    },
};
</script>


<style scoped lang="scss">
// glass effect
.glass-effect {
    backdrop-filter: brightness(110%);
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
    width: 90%;
    margin-left: 4%;
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
    width: 75%;
    margin-left: 12%;
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
</style>
