<template>
  <div class="product">
    <HeaderHydroponics />
    <a href="https://wa.me/6287774784469" class="float" target="_blank">
<i class="fa fa-whatsapp my-float"></i>
</a>
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-text product-more">
              <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
              <span>Detail</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item">
          <div class="product-pic-zoom">
            <img class="product-big-img" src="img/mickey1.jpg" alt="" />
          </div>
        </div>
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="3"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide v-for="slide in 4" :key="slide">
        <div class="carousel__item" @click="slideTo(slide - 1)">
          <div class="pt active" data-imgbigurl="img/mickey2.jpg">
            <img src="img/mickey2.jpg" alt="" />
          </div>

          <div class="pt" data-imgbigurl="img/mickey3.jpg">
            <img src="img/mickey3.jpg" alt="" />
          </div>
        </div>
      </Slide>
    </Carousel> -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="product-pic-zoom">
                  <img class="product-big-img" :src="gambar_default" alt="" />
                </div>

                <div class="product-thumbs">
                  <carousel
                    :items-to-show="2.5"
                    class="product-thumbs-track ps-slider"
                  >
                    <slide v-for="ss in productDetails.galleries" :key="ss.id">
                      <div
                        class="pt"
                        @click="changeImage(ss.photo)"
                        :class="ss.photo == gambar_default ? 'active' : ''"
                      >
                        <img :src="ss.photo" alt="" />
                      </div>
                    </slide>

                    <template #addons>
                      <navigation />
                      <pagination />
                    </template>
                  </carousel>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="product-details text-left">
                  <div class="pd-title">
                    <span>{{ productDetails.type }}</span>
                    <h3>{{ productDetails.name }}</h3>
                  </div>
                  <div class="pd-desc">
                    <p v-html="productDetails.description"></p>

                    <h4>
                      Rp. {{ productDetails.price }}<span>/ikat (500gram)</span>
                    </h4>
                  </div>
                  <div>
                    <span>Quantity: {{ productDetails.quantity }}</span>

                    <br>
                  </div>
                  <div class="quantity">
              

                    <router-link to="/cart">
                      <a
                        @click="
                          saveKeranjang(
                            productDetails.id,
                            productDetails.name,
                            productDetails.price,
                            productDetails.galleries[0].photo
                          )
                        "
                        href="#"
                        class="primary-btn pd-cart"
                        >Add To Cart</a
                      >
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Product Shop Section End -->

    <FooterHydroponics />
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHydroponics from "@/components/HeaderHydroponics.vue";
import FooterHydroponics from "@/components/FooterHydroponics.vue";
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import axios from "axios";

export default defineComponent({
  name: "ProductView",
  components: {
    HeaderHydroponics,
    FooterHydroponics,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      gambar_default: "",
      productDetails: [],
      keranjangUser: [],
      ref: null,
    };
  },

  methods: {
    changeImage(urlImage) {
      this.gambar_default = urlImage;
    },
    setDataPicture(data) {
      //replace object productDetails dengan data dari API
      this.productDetails = data;
      //replace value gambar default dengan data dari API
      this.gambar_default = data.galleries[0].photo;
    },
    saveKeranjang(idProduct, nameProduct, priceProduct, photoProduct) {
      var productStored = {
        id: idProduct,
        name: nameProduct,
        price: priceProduct,
        photo: photoProduct,
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
    if (localStorage.getItem("keranjangUser")) {
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch (e) {
        localStorage.removeItem("keranjangUser");
      }
    }

    axios
      .get("http://127.0.0.1:8000/api/products", {
        params: {
          id: this.$route.params.id,
        },
      })
      .then((res) => this.setDataPicture(res.data.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  },
});
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
