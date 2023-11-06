<template>
    <section class='container-flex gradient-midnight-maritime-aquatic my-2 p-0 SideEye'>
        <div class='row justify-content-around pt-3 text-center'>
            <div class="col-12 col-md-3">
                <img src="src/assets/img/RenuLogoMockUp.png" alt="" class=""
                    style="object-fit: cover; object-position: center; max-height: 30vh;">
                <p></p>
                <p>Email Info@RenuSolutions.tech</p>
                <p>Call Text (208) 918-0942</p>
            </div>
            <!-- <div class="col-12 col-md-2 text-center">
                <p class="ftsTitleUnderline pt-1 pb-2 m-0 fw-bold">SERVICES</p>
                <p class="borderLiner py-1 m-0"> Web Design</p>
                <p class="borderLiner py-1 m-0">Website Maintenance</p>
                <p class="borderLiner py-1 m-0">SEO Services</p>
                <p class="borderLiner py-1 m-0">Content Creation</p>
                <p class="borderLiner py-1 m-0">Logo Design</p>
            </div>
            <div class="col-12 col-md-2 text-center">
                <p class="ftsTitleUnderline pt-1 pb-2 m-0 fw-bold">NAVIGATION</p>
                <p class="borderLiner py-1 m-0">Home</p>
                <p class="borderLiner py-1 m-0">About</p>
                <p class="borderLiner py-1 m-0">Contact</p>
                <p class="borderLiner py-1 m-0">Blog</p>
            </div> -->
        </div>



        <!-- bottom row -->
        <!-- <div class='row pt-3 pb-2 m-0 text-center SideEye'>
            <p class="privpoli mb-0 p-0">PRIVACY POLICY</p>
        </div> -->
    </section>
</template>
<script>
export default {
    setup() {
        return {};
    },
};
</script>


<style>
/* TITLE STATIC UNDERLINE */
.privpoli:hover {
    color: var(--Midnight);
    cursor: pointer;
}

.ftsTitleUnderline {
    border-bottom: 1px solid var(--Maritime);
    font-size: small;
}

/* ANIMATED UNDERLINE */
.borderLiner {
    border: none;
    position: relative;
    overflow: hidden;
    /* Ensure the pseudo-element doesn't overflow the container */
}

.borderLiner::after {
    content: '';
    position: absolute;
    width: 0;
    height: 1px;
    left: 50%;
    bottom: 0;
    background-color: white;
    transition: all ease-in-out 0.2s;
}

.borderLiner:hover::after {
    width: 100%;
    left: 0;
}
</style>
