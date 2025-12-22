<template>
  <div ref="gtmNoScript" />
  <!--loading-->
  <div v-bind:class="{
    'opacity-0': !isLoading,
    'pointer-events-none': !isLoading
  }"
    class="transition-all duration-500 flex-col flex items-center justify-center fixed w-screen h-screen top-0 left-0 bg-white z-[10000]">
    <img class="w-32" src="//h35.banner.tw/img//loading_w.gif" alt="loading" srcset="" />
  </div>
  <!--loading end 
  font-['Noto_Sans_TC',sans-serif]
  font-['Noto_Serif_TC',serif]
  -->
  <Nav v-if="info.navList.length > 0" />
  <div class="home overflow-hidden  font-['Noto_Serif_TC',serif] bg-[#000216] text-[#4D4D4D]">
    <div class="allbg">
      <!-- bg內容想做成滾動視差 去符合 allbg 的高度-->
      <div class="bg">
      </div>
    </div>
    <S1 />
    <S2 />
    <S3 />
    <S4 />
    <S5 />
    <S6 />
    <S7 />
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

/*
.allbg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  // background: url("@/section/s1/bg3.jpg") center top;
  background-size: 270% auto;overflow: hidden;

  @media screen and (min-width: 768px) {
    background-size: 100% auto;
  }

  .bg {
    width: 100%; //height: 100%;
    transform: translateY(0%); // 初始位置
    transition: transform 10s linear; // 平滑過渡效果（可選）
    height: sizem(9000);
    &::before {
      content: '';
      position: absolute;
      top: -16.5%;
      left: 0;
      width: 100%;
      height: 100%;
      background: url("@/section/s1/bg1.jpg") center top;
      background-size: 200% auto;
      @media screen and (min-width: 768px) {
      top: -17%;
     //   background-image: url('@/section/s1/bg.jpg');
        background-size: 100% auto;
      }
    }
      @media screen and (min-width: 768px) {
        height: size(11000);
      }
  }

}*/

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
  position: relative;
  overflow: hidden;
  font-size: sizem(14);

  @media screen and (min-width: 768px) {
    font-size: size(15);
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("@/section/s1/bg1.jpg") center top;
      background-size: 200% auto;
    // opacity: 0.05;
    z-index: 0;
  @media screen and (min-width: 768px) {
    font-size: size(15);
    background-size: 100% auto;
  }
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
import info from '@/info';
import S1 from '@/section/s1.vue';
import S2 from '@/section/s2.vue';
import S3 from '@/section/s3.vue';
import S4 from '@/section/s4.vue';
import S5 from '@/section/s5.vue';
import S6 from '@/section/s6.vue';
import S7 from '@/section/s7.vue';
import Order from '@/section/order.vue';
import Nav from '@/layout/navbar.vue';
import { ref, onMounted, onUnmounted } from "vue"

import AOS from 'aos';

const isLoading = ref(true);
const gtmNoScript = ref('');
const config = ref({
  showNav: false
})
onMounted(() => {
  /*
  let ticking = false; // 確保在一幀內只處理一次滾動事件
  const allbg = document.querySelector(".allbg .bg");

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        if (allbg) {
          allbg.style.transform = `translateY(${scrollPosition * 0.1}px)`; // 0.3 為速度係數
        }
        ticking = false; // 完成處理後重置
      });
      ticking = true; // 標記正在處理中
    }
  };

  // 綁定滾動事件
  window.addEventListener("scroll", handleScroll);


  // 在組件卸載時清理事件
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  */
  window.onload = function () {
    isLoading.value = false;
    AOS.init({
      offset: 0,
      duration: 2000,
    });
  };
});


</script>
