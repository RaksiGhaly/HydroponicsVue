<template>
  <div class="home">
    <HeaderHydroponics />

    <a href="https://wa.me/6287774784469" class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>
    
    <!-- <div class="whatsapp-button">
        <a href="https://wa.me/6287774784469" class="float" target="_blank">
    
            <img  class = "image" src="img/whatsapp.png" alt="">
        </a>
    </div> -->
    <!-- <HeroHydroponics /> -->
    <section class="hero-section">
    <carousel :items-to-show="1">
      <slide v-for="slide in 1" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/hero-carousel1.jpg')"
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
                <button @click="handleClick1" class="primary-btn">
                  <a  data-link="home"
           id="link1" >ABOUT US</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/hero-carousel2.jpg')"
        >
          <div class="container">
            <div class="row banner-info">
              <div class="col-lg-5">
                <span>Key Values</span>
                <h2>Know Our Principles</h2>
                <p>
                  See our Key Values, that defines the our company goals.
                </p>
                <button @click="handleClick2" class="primary-btn">
                  <a  data-link="home"
           id="link1" >Key Values</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/hero-carousel3.jpg')"
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
                <button @click="handleClick3" class="primary-btn">
                  <a  data-link="home"
           id="link1" >Shop Now</a>
                </button>
                
              </div>
            </div>
          </div>
        </div>
      </slide>
      <slide v-for="slide in 1" :key="slide">
        <div
          class="single-hero-items set-bg"
          style="background-image: url('img/hero-carousel4.jpg')"
        >
          <div class="container">
            <div class="row banner-info">
              <div class="col-lg-5">
                <span>Team</span>
                <h2>Striving Towards a Better Future</h2>
                <p>
                  See the company core team that strive for sustainable development and growth.
                </p>
                <button @click="handleClick4" class="primary-btn">
                  <a  data-link="home"
           id="link1" >Our Team</a>
                </button>
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
    <section id="about" class="about" ref="targetRef1">
        <h2>About Us</h2>

        <div class="row">


            <div class="about-img">
                <img src="img/CV SWU.png" alt="">
            </div>
            
            <div class="content">
                
                <p class="p1">
                    CV. Spirit Wira Utama  is one of the leading supplier of hydroponic commodities from Indonesia. We are a company engaged in the cultivation of various vegetables using  only the best seed and technique. We process more than 10 hectares of  plantation, spread across several places in the island of Java.
                </p>
                <p>
                    We have served customers from all over the world and it has become our top priority to meet our customer's satisfaction and expectations.
                </p>
            </div>

            
        </div>
    </section>
    <section id ="feature" class="feature mt-5" ref="targetRef2">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Our Key Values</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-md-4 text-center">
                    <div class="feature-card">
                        <div class="image position-relative mx-auto">
                            <img src="img/justice.png" alt="" >
                        </div>
                        <h3 class="mt-3">Integrity</h3>
                            <p class="mt-4">
                                Integrity means telling the truth, keeping our word, and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.
                            </p>
                    </div>
                </div>

                <div class="col-md-4 text-center">
                    <div class="feature-card">
                        <div class="image position-relative mx-auto">
                            <img src="img/quality.png" alt="" >
                        </div>
                        <h3 class="mt-3">Quality</h3>
                            <p class="mt-4">
                                Quality is exhibited in many ways by providing products and services that delight customers while delivering financial results that meet investor expectations.
                            </p>
                    </div>
                </div>

                <div class="col-md-4 text-center">
                    <div class="feature-card">
                        <div class="image position-relative mx-auto">
                            <img src="img/commitment.png" alt="" >
                        </div>
                        <h3 class="mt-3">Commitment</h3>
                            <p class="mt-4">
                                Commitment ensure us to continue providing the best for our customers and investors all the time. 
                            </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- <ProductsHydroponics /> -->
    <section id="products" class="women-banner spad" ref="targetRef3">
    
    <div class="container-fluid">
      <!-- <div class="row">
        <div class="col-12 mt-5">
          <h1>Our Product</h1>
        </div>
      </div>

      <div class="col-12 mt-5">
        <button class="button-download">
              <i class="fa fa-download" aria-hidden="true"></i> Download Catalog 
        </button>
      </div> -->

      <div class="col-lg-12">
        <div class="row">
          <div class="col-sm-5 mt-5">
            <h1>Our Products</h1>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-4">
            <a href="/files/catalog CV SWU.pdf" download="Catalog">
              <button class="button-download">
                <i class="fa fa-download" aria-hidden="true"></i> Download
                Catalog
              </button>
            </a>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 mt-5" v-if="products.length > 0">
          <Carousel
            :items-to-show="3"
            :wrap-around="true"
            :autoplay="3000"
            :pause-autoplay-on-hover="true"
          >
            <Slide v-for="itemProduct in products" :key="itemProduct.id">
              <div class="product-item">
                <div class="pi-pic">
                  <img v-bind:src="itemProduct.galleries[0].photo" alt="" />
                  <ul>
                    <li @click="
                          saveKeranjang(
                            itemProduct.id,
                            itemProduct.name,
                            itemProduct.price,
                            itemProduct.galleries[0].photo
                          )
                        " class="w-icon active">
                      <a href="#"><i class="icon_bag_alt"></i></a>
                    </li>
                    <li class="quick-view">
                      <router-link v-bind:to="/product/ + itemProduct.id"
                        >+ Quick View</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="pi-text">
                  <div class="catagory-name">{{ itemProduct.type }}</div>

                  <a href="#">
                    <h5>{{ itemProduct.name }}</h5>
                  </a>
                  <div class="product-price">
                    Rp. {{ itemProduct.price }}
                    <!-- <span>$35.00</span> -->
                  </div>
                </div>
              </div>
            </Slide>
            <template #addons>
              <Navigation />
            </template>
          </Carousel>
        </div>

        <!-- <div class="col-lg-12" v-else>
          <p>
            Produk Belum Tersedia Untuk Saat Ini
          </p>
        </div> -->
      </div>
    </div>
  </section>
    <section id ="team" class="teams" ref="targetRef4">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2>Our Team</h2>
                </div>
            </div>

            <div class="row">
                <div class="col-md-6 text-center">
                    <div class="teams-card">
                        <div class="image-teams position-relative mx-auto">
                            <img src="img/kunto herwibowo 1.png" alt="" >
                        </div>
                        <h5 class="mt-1">Kunto herwibowo</h5>
                        <h3 class="mt-1">Founder</h3>
                            <p class="mt-4">
                                “Many of life's failures are people who did not realize how close they were to success when they gave up.”
                            </p>
                    </div>
                </div>

                <div class="col-md-6 text-center">
                    <div class="teams-card">
                        <div class="image-teams position-relative mx-auto">
                            <img src="img/gita soraya.png" alt="" c>
                        </div>
                        <h5 class="mt-1">Gita Soraya</h5>
                        <h3 class="mt-1">Co-Founder</h3>
                            <p class="mt-4">
                                “A little progress every day adds up to big results.”
                            </p>
                    </div>
                </div>

                

                
            </div>
        </div>
    </section>
    <FooterHydroponics />
  </div>
</template>

<script>
// @ is an alias to /src
import FooterHydroponics from "@/components/FooterHydroponics.vue";
import HeaderHydroponics from "@/components/HeaderHydroponics.vue";
// import HeroHydroponics from "@/components/HeroHydroponics.vue";
// import ProductsHydroponics from "@/components/ProductsHydroponics.vue";
// import 'vue3-carousel/dist/carousel.css';
// import { Carousel, Pagination, Slide, Navigation} from 'vue3-carousel'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Pagination, Slide, Navigation } from "vue3-carousel";
// import { ref } from 'vue'
import axios from "axios";
import { defineComponent } from "vue";


export default defineComponent({
  name: "HomeView",
  components: {
    Carousel,
    Slide,
    Navigation,
    HeaderHydroponics,
    // HeroHydroponics,
    // ProductsHydroponics,
    FooterHydroponics,
    Pagination,
    
  },
  

  data() {
    return {
      products: [],
      itemProduct: [],
      keranjangUser: [],
      ref:null,
    };
  },

  methods: {
    saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
      var productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct
      };
      this.keranjangUser.push(productStored);
      const parsed = JSON.stringify(this.keranjangUser);
      localStorage.setItem("keranjangUser", parsed);
    },

    handleClick1() {
      this.$refs.targetRef1.scrollIntoView({ behavior: 'smooth' });
    }, 
    handleClick2() {
      this.$refs.targetRef2.scrollIntoView({ behavior: 'smooth' });
    }, 
    handleClick3() {
      this.$refs.targetRef3.scrollIntoView({ behavior: 'smooth' });
    }, 
  
    handleClick4() {
      this.$refs.targetRef4.scrollIntoView({ behavior: 'smooth' });
    }, 
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => (this.products = res.data.data.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  },
});


  

// this.$refs.targetRef.scrollIntoView({ behavior: 'smooth' });
// const sectionRefEl = ref < HTMLElement | null > (null)

// function scrollTo(view: Ref<HTMLElement | null>) { 
//   view.value?.scrollIntoView({ behavior: 'smooth' }) 
// }


</script>

<style>
.set-bg {
  width: 100%;
  height: 500px;
}

.banner-info {
  margin-top: 130px;
}

.single-hero-items span {
  color: #e7ab3c;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 28px;
  display: inline-block;
  top: 50px;
}
</style>
