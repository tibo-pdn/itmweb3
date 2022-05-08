<!-- <script>
  const button = document.getElementById('post-btn');

  button.addEventListener('click', async _ => {
    try {     
      const response = await fetch('/collections/1/nft', {
        method: 'post',
        body: {
          // Your body
        }
      });
      console.log('Completed!', response);
    } catch(err) {
      console.error(`Error: ${err}`);
    }
  });
</script> -->

<template>
  <div class="about col-12 d-flex justify-content-center align-items-center flex-wrap">
  <div class="col-12">
  <center><button type="button" class="btn btn-success">Claim NFT</button></center>
  <br>
  <br>
  <br>
  <br>
  <h1>Your item(s):</h1>
  </div>

  <div id="div-nft" class="text-center" width="2px">
    <h2>Air Jordan One</h2>
    <img src="https://ipfs.io/ipfs/QmUhURPdGGqoYRGqi3vtFQVAk6aDZLdKnwJZhpu2dJDf1T" height="100px" class="rounded" alt="Air Jordan" >
  </div>
  
  <div id="div-nft" class="text-center">
    <h2>Yeezy Hangtag</h2>
    <img src="assets/yeezyhangtag.png" height="100px" class="rounded" alt="Air Jordan" >
  </div>
  
  <div id="div-nft" class="text-center">
    <h2>Air Jordan One</h2>
    <img src="https://ipfs.io/ipfs/QmUhURPdGGqoYRGqi3vtFQVAk6aDZLdKnwJZhpu2dJDf1T" height="100px" class="rounded" alt="Air Jordan" >
  </div>
  
  <div id="div-nft" class="text-center">
    <h2>Air Jordan One</h2>
    <img src="https://ipfs.io/ipfs/QmUhURPdGGqoYRGqi3vtFQVAk6aDZLdKnwJZhpu2dJDf1T" height="100px" class="rounded" alt="Air Jordan" >
  </div>
  
  <div id="div-nft" class="text-center">
    <h2>Air Jordan One</h2>
    <img src="https://ipfs.io/ipfs/QmUhURPdGGqoYRGqi3vtFQVAk6aDZLdKnwJZhpu2dJDf1T" height="100px" class="rounded" alt="Air Jordan" >
  </div>

  </div>
</template>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
#div-nft {
  border: solid green;
  
  border-radius: 4px;
  width: 300px;
  margin-bottom: 10px;
  margin-left: 4px;

}
</style>
