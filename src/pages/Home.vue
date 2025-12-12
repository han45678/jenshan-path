<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500	flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="">
  </div>
  <!--loading end-->
  <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden font-['Noto_Sans_TC',sans-serif] bg-[#e6e6e6] text-[#4D4D4D]">
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
    <S8 />
    <S9 />
    <S10 />
    <S11 />
    <Order />
  </div>
</template>


<style lang="scss">
@import '@/assets/style/function.scss';

@keyframes an1 {
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.home {
  // background: linear-gradient(to bottom, #009e41 0%, #00a6e9 100%);
text-align: justify;
  &::before {
    content: "";
    //background: url("@/section/s3/1.webp") center;background-size: 100% auto;
    width: 120%;
    height: 120vw;
    position: fixed;
    left: -10%;
    right: 0;
    top: calc(50% - 60vw);
    bottom: 0;
    transform: translateX(0%) rotate(360deg);
    filter: blur(10px);
    animation: bg 40s linear infinite;

    @media screen and (max-width: 767px) {
      width: 240%;
      height: 240vw;
      left: -70%;
      top: calc(50% - 120vw);
    }
  }
}

@keyframes bg {
  to {
    transform: translateX(0%);
  }
}

img {
  display: inline;
  max-width: unset;
  height: unset;
  margin: 0 auto;
}
</style>

<script setup>
import info from "@/info"
import S1 from "@/section/s1.vue"
import S2 from "@/section/s2.vue"
import S3 from "@/section/s3.vue"
import S4 from "@/section/s4.vue"
import S5 from "@/section/s5.vue"
import S6 from "@/section/s6.vue"
import S7 from "@/section/s7.vue"
import S8 from "@/section/s8.vue"
import S9 from "@/section/s9.vue"
import S10 from "@/section/s10.vue"
import S11 from "@/section/s11.vue"
import Order from "@/section/order.vue"
import Nav from "@/layout/navbar.vue"
import { onMounted, ref } from "vue"

import AOS from 'aos';

const isLoading = ref(true)
const gtmNoScript = ref('')
onMounted(() => {
  window.onload = function () {
    isLoading.value = false
    AOS.init({
      offset: 0,
      duration: 2000
    });
  };

})
</script>
