<template>
    <div class="success">
        <div class="d-flex success-checkout align-items-center justify-content-center">
        <div class="col col-lg-4 text-center">
            <img src="img/success-buy.png" alt="" width="294">
            <h3 class="mt-4">
                Checkout Berhasil!
            </h3>
            <p class="mt-2">
                
                Jika anda memilih pembayaran transfer, silahkan transfer ke rekening dan bank yang sudah ditentukan, ya! Setelah itu, kirimkan buktinya pada kami lewat whatsApp! 
            </p>

            <div class="row">
              <div class="col-lg-12">
                <div class="proceed-checkout text-left">
                  <ul>
                    
                    <li class="subtotal mt-3">
                      Bank Transfer <span>BCA</span>
                    </li>
                    <li class="subtotal mt-3">
                      No. Rekening <span>2208 1996 1403</span>
                    </li>
                    <li class="subtotal mt-3">
                      Nama Penerima <span>CV Spirit Wira Utama</span>
                    </li>
                    <li class="subtotal mt-3">
                      No. WhatsApp <span>081908925358</span>
                    </li>
                  </ul>

                </div>
              </div>
            </div>

            <p class="mt-2">
                
                Jika anda memilih COD, silahkan tunggu konfirmasi chat dari kami. Setelah itu, siapkan uang untuk pembayaran dan tunggu kurir kami mengirim barangnya!
            
            </p>
            <router-link to="/"><a href="index.html" class="primary-btn pd-cart mt-3">Back to Home</a></router-link>
        </div>
    </div>
    </div>
</template>
<script>

export default {
        name: "SuccessView"
    }
</script>