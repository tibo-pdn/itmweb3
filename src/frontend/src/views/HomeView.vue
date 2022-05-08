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
        <label for="exampleFormControlTextarea1" class="form-label">Collect your Itm:</label>
        <input class="form-control form-control-lg" type="text" placeholder="Wallet adress" aria-label=".form-control-lg example">
      </form>
    </div>

    </div>
    </div>
</template>