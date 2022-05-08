<script setup>
import TheWelcome from '@/components/TheWelcome.vue'

</script>

<template>
 <div class="col-12 d-flex justify-content-center align-items-start" style=" background: linear-gradient(#d2e5d6, #8add9b); height: 100vh; padding: 5rem;">
    <div class="col-8 d-flex justify-content-center align-items-start flex-wrap">
    
    <div class="col-12 text-center" style="">
        <img alt="Vue logo" class="logo" src="assets/thumbnail_my_logo_itm.png" style="width: 30%;"  />
    </div>
    
    <button type="button" class="btn btn-success mt-4">claim NFT</button>
    
    <div class="col-12 mt-3">
      <form action="http://127.0.0.1:8081/nft/nike" method="POST">
        <label for="exampleFormControlTextarea1" class="form-label">Collect your ITM:</label>
        <input class="form-control form-control-lg" type="text" placeholder="Wallet adress" aria-label=".form-control-lg example">
      </form>
    </div>

    </div>
  
    <div class="card" style="width: 18rem; position:absolute; right: 8%; border-radius: 10px;">
  <div class="card-body text-center">
  <img src="assets/form_pic.png" class="card-img-top" alt="..." style="width: 40%;">
    <h5 class="card-title">For companies</h5>
    <p class="card-text">You are a <strong>company</strong> and you want to <strong>create your own collection</strong> ? Click here !</p>
    <a href="https://a9sr7iz5qls.typeform.com/to/i7JrdOjp" class="btn btn-primary stretched-link">Form</a>
  </div>

  </div>
    </div>

</template>