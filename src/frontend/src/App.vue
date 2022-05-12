<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import {ethers} from "ethers";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

async function signMessage() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)

  provider.send("eth_requestAccounts", [])
  const signer = provider.getSigner()
  const signature = await signer.signMessage("Hello World");
  console.log("Signature", signature)
}
</script>

<template>
  <RouterView />
</template>