<template>
  <div class="payment">
    <HeaderHydroponics />
    <section style="background-color: #eee">
      <div class="container py-5">
        <div class="card">
          <div class="card-body">
            <div class="row d-flex justify-content-center pb-5">
              <div class="col-md-7 col-xl-5 mb-4 mb-md-0">
                <h4>Please Choose The Payment Method</h4>

                <div class="pt-2">
                  <form class="pb-3">
                    <div class="d-flex flex-row pb-3">
                      <div class="d-flex align-items-center pe-2">
                       
                        <!-- <input 
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel1"
                          value="TRANSFER"
                          aria-label="..."
                          checked
                        />  -->
                    
                      </div>
                      <div
                        class="rounded border d-flex w-100 p-3 align-items-center"
                      >
                        <router-link to="/transfer"><p  class="mb-0">
                          <i class="fa fa-exchange" aria-hidden="true">
                            Transfer</i
                          >
                        
                        </p>
                    </router-link>
                      </div>
                    </div>

                    <div class="d-flex flex-row">
                      <div class="d-flex align-items-center pe-2">
                        <!-- <input
                          class="form-check-input"
                          type="radio"
                          name="radioNoLabel"
                          id="radioNoLabel2"
                          value="COD"
                          aria-label="..."
                        /> -->
                      </div>
                      <div
                        class="rounded border d-flex w-100 p-3 align-items-center"
                      >
                        <router-link to="/success"><p class="mb-0">
                          <i class="fa fa-money" aria-hidden="true">
                            COD (Cash On Delivery)</i
                          >
                        </p>
                        </router-link>
                      </div>
                    </div>
                  </form>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <a href="" class="primary-btn view-card"><router-link to="/cart" style="color: #FFFF">VIEW CARD</router-link></a> -->

    <FooterHydroponics />
  </div>
</template>

<script>
import HeaderHydroponics from "@/components/HeaderHydroponics.vue";
import FooterHydroponics from "@/components/FooterHydroponics.vue";

export default {
  name: "ChoosePaymentView",
  components: {
    HeaderHydroponics,
    FooterHydroponics,
  },

  methods: {
    directTo(value) {
      // var ele = document.getElementsByName('radioNoLabel');

      if (value == "TRANSFER") {
        this.$router.push({ path: `/success` });
      } else this.$router.push({ path: `/home` });
    },
  },
};
</script>
