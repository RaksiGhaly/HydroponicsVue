<template>
  <!-- Footer Section Begin -->
  <footer class="footer-section" id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          <div class="footer-left text-left">
            <div class="footer-logo">
              <a href="#"><img src="img/logo perusahaan.png" alt="" /></a>
            </div>
            <ul>
              <li>
                Address: Jln kesehatan 3/kav.80, komplek kesehatan. Desa
                Citanduy. Tanggerang Selatan
              </li>
              <li>Phone (non-whatsapp): +62 821-1541-2347</li>
              <li>Phone (whatsapp): +62 877-7478-4469</li>
              <li>Email: Ta.tropicalagri@gmail.com</li>
            </ul>
            <div class="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100064717237046"
                ><i class="fa fa-facebook"></i
              ></a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="footer-widget text-left">
            <h5>Information</h5>
            <ul>
              <li>
                <router-link :to="{ name: 'home', hash: '#about' }">
                  About Us</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'home', hash: '#feature' }">
                  Feature</router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'home', hash: '#products' }">
                  <a>Product</a></router-link
                >
              </li>
              <li>
                <router-link :to="{ name: 'home', hash: '#team' }">
                  <a>Team</a></router-link
                >
              </li>
              <li><a @click="scrollToElement5">Contact</a></li>

              <!-- <li><a @click="scrollToElement2">Feature</a></li>
              <li><a @click="scrollToElement3">Product</a></li>
              <li><a @click="scrollToElement4">Team</a></li>
              <li><a @click="scrollToElement5">contact</a></li> -->

              <!-- <router-link :to="{ name: 'home', hash: '#about' }">About Us</router-link> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-reserved">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="copyright-text">
              Copyright &copy; 2023 - 2024 All rights reserved | CV. Spirit Wira
              Utama
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Section End -->
</template>

<script>
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Pagination, Slide, Navigation} from 'vue3-carousel'
// import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
// import { scrollto } from "svelte-scrollto";
// import * as animateScroll from "svelte-scrollto";
// import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
// import {Router} from 'vue-router'

// var Vue = require('vue');
var VueScrollTo = require("vue-scrollto");
// var Vue = require('vue');
// Vue.use(VueScrollTo, {
//      container: "body",
//      duration: 500,
//      easing: "ease",
//      offset: 0,
//      force: true,
//      cancelable: true,
//      onStart: false,
//      onDone: false,
//      onCancel: false,
//      x: false,
//      y: true
//  })

// Vue.use(VueScrollTo)

export default {
  name: "FooterOtherPage",
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    // scrollto
  },

  methods: {
    handleClick1() {
      this.$refs.targetRef1.scrollIntoView({ behavior: "smooth" });
    },

    handleClick2() {
      this.$refs.targetRef2.scrollIntoView({ behavior: "smooth" });
    },
    handleClick3() {
      this.$refs.targetRef3.scrollIntoView({ behavior: "smooth" });
    },

    handleClick4() {
      this.$refs.targetRef4.scrollIntoView({ behavior: "smooth" });
      },

       scrollToElement5() {
      VueScrollTo.scrollTo("#footer", 500, {
        easing: "ease-in-out",
        // offset: -100,
        force: false,
        cancelable: true,
        onStart: function () {
          console.log("scroll started");
        },

        onDone: function () {
          console.log("scroll finished");
        },
        onCancel: function () {
          console.log("scroll canceled");
        },
        x: false,
        y: true,
      });
    },
  },
};
</script>

<!-- <style>
    .footer-section{
        max-height: 800px;
    }
</style> -->
