<template>

  
  <!-- Women Banner Section Begin -->
  <section class="women-banner spad" ref="targetRef3">
    
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

  <!-- Women Banner Section End -->
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ProductsHydroponics",
  components: {
    Carousel,
    Slide,
    Navigation,
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

    handleClick3() {
      this.$refs.targetRef3.scrollIntoView({ behavior: 'smooth' });
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
</script>
