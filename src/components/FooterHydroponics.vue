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
                <a @click="scrollToElement1">About Us</a>
              </li>
              <li><a @click="scrollToElement2">Feature</a></li>
              <li><a @click="scrollToElement3">Product</a></li>
              <li><a @click="scrollToElement4">Team</a></li>
              <li><a @click="scrollToElement5">contact</a></li>

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
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
// import { scrollto } from "svelte-scrollto";
// import * as animateScroll from "svelte-scrollto";
// import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

var Vue = require('vue');
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

export default defineComponent({
  name: "FooterHydroponics",
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
    // scrollto
  },

  methods: {

    scrollToElement1() {
      VueScrollTo.scrollTo("#about", 500, {
        easing: "ease-in-out",
        offset: 100,
        force: false,
        cancelable: true,
        onStart: function () {
          console.log('scroll started');
        },

        onDone: function () {
          console.log('scroll finished');
        },
        onCancel: function () {
          console.log('scroll canceled');
        },
        x: false,
        y: true,
      });
      },

      scrollToElement2() {
      VueScrollTo.scrollTo("#feature", 500, {
        easing: "ease-in-out",
        offset: -50,
        force: false,
        cancelable: true,
        onStart: function () {
          console.log('scroll started');
        },

        onDone: function () {
          console.log('scroll finished');
        },
        onCancel: function () {
          console.log('scroll canceled');
        },
        x: false,
        y: true,
      });
      },

      scrollToElement3() {
      VueScrollTo.scrollTo("#products", 500, {
        easing: "ease-in-out",
        offset: 20,
        force: false,
        cancelable: true,
        onStart: function () {
          console.log('scroll started');
        },

        onDone: function () {
          console.log('scroll finished');
        },
        onCancel: function () {
          console.log('scroll canceled');
        },
        x: false,
        y: true,
      });
      },

      scrollToElement4() {
      VueScrollTo.scrollTo("#team", 500, {
        easing: "ease-in-out",
        offset: 50,
        force: false,
        cancelable: true,
        onStart: function () {
          console.log('scroll started');
        },

        onDone: function () {
          console.log('scroll finished');
        },
        onCancel: function () {
          console.log('scroll canceled');
        },
        x: false,
        y: true,
      });
      },

      scrollToElement5() {
      VueScrollTo.scrollTo("#footer", 500, {
        easing: "ease-in-out",
        // offset: -100,
        force: false,
        cancelable: true,
        onStart: function () {
          console.log('scroll started');
        },

        onDone: function () {
          console.log('scroll finished');
        },
        onCancel: function () {
          console.log('scroll canceled');
        },
        x: false,
        y: true,
      });
      },

      
  },
});
</script>

<!-- <style>
    .footer-section{
        max-height: 800px;
    }
</style> -->
