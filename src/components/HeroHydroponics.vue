<template>
  <!-- Hero Section Begin -->
  <section class="hero-section">
    <carousel :items-to-show="1">
      <slide v-for="slide in 1" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/hero-4.jpg')"
        >
          <div class="container">
            <div class="row banner-info">
              <div class="col-lg-5">
                <span>CV. Spirit Wira Utama</span>
                <h2>The Leading Supplier of Hydroponic Products</h2>
                <p>
                  CV. Spirit Wira Utama is one of the leading supplier of
                  hydrophonic commodities from Indonesia. It has become our
                  priority to meet our customers demands and expectations
                </p>
                <a href="#about" class="primary-btn">ABOUT US</a>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/hero-5.jpg')"
        >
          <div class="container">
            <div class="row banner-info">
              <div class="col-lg-5">
                <span>Products</span>
                <h2>Selling Only Quality Products</h2>
                <p>
                  See our hydroponics commodities, ranging from Asian to Western
                  vegetables. We only sell the best vegetables, grown using the
                  best seed and technique.
                </p>
                <a href="#" class="primary-btn">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </carousel>
  </section>
  <!-- Hero Section End -->
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";

export default {
  name: "HeroHydroponics",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
};
</script>
