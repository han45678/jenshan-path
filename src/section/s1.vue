<template>
  <article class="s1 font-[Amiri,serif,'Noto_Serif_TC']" id="s1">
    <!-- 
    <img src="./s1/pc.jpg" class="t0" v-if="!isMobile" />
    <img src="./s1/mo.jpg" class="t0" v-else />  -->

    <div class="txt">
      <img class="logo" src="./s1/logo.svg" alt="logo" data-aos="fade-up">
      <img class="t1" src="./s1/t1.svg" alt="text" data-aos="fade-up">
      <img class="t2" src="./s1/t2.svg" alt="text" data-aos="fade-up">
      <img class="t3" src="./s1/t3.svg" alt="text" data-aos="fade-up">
    </div>
    <div class="right">
      <img class="bg" src="./s1/right.webp" alt="right">
      <div class="bird">
        <img src="./s1/bird.webp" alt="bird" data-aos="fade-left">
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  min-height: sizem(604);
  max-height: sizem(812);
  background: url("./s1/bg.jpg") center right;
  background-size: cover;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: size(47);
    min-height: size(950);
    max-height: size(1080);
  }
  .t0 {
    position: absolute;
    width: 100%;
    top: sizem(-395);
    left: 0;
    pointer-events: none;
    z-index: 10;
    opacity: .3;
  @media screen and (min-width: 768px) {
    
    top: size(-120);
  }
  }

  .txt {
    position: absolute;
    padding-right: sizem(160);
    top: sizem(90);
    top:calc(50% + #{sizem(110 - 750 * .5)});

    @media screen and (min-width: 768px) {
      padding-right: 0;
      top: size(150);
      top:calc(50% + #{size(150 - 1080 * .5)});
      left: 50%;
      transform: translateX(-50%);
      margin: auto;
    }

    img {
      display: block;
      max-width: 100%;

      &.logo {
        width: sizem(140);

        @media screen and (min-width: 768px) {
          width: size(300);
        }
      }

      &.t1 {
        margin-top: sizem(115);
        width: sizem(165);

        @media screen and (min-width: 768px) {
          margin-top: size(160);
          width: size(365);
        }
      }

      &.t2 {
        margin-top: sizem(20);
        width: sizem(100);

        @media screen and (min-width: 768px) {
          margin-top: size(43);
          width: size(215);
        }
      }

      &.t3 {
        margin-top: sizem(95);
        width: sizem(55);

        @media screen and (min-width: 768px) {
          margin-top: size(115);
          width: size(125);
        }
      }
    }
  }

  .right {
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;

    .bg {
      width: auto;
      height: 100%;
    }

    .bird {
      width: 100%;
      position: absolute;
      width: sizem(120);
      top: sizem(225);
      right: 18%;
      overflow: hidden;

      @media screen and (min-width: 768px) {
        width: size(240);
        top: size(360);
      }

      img {
        width: 100%;
      }
    }
  }


}
</style>
<script setup>
import { computed, getCurrentInstance, ref, inject } from 'vue';
const globals = getCurrentInstance().appContext.config.globalProperties;

const isMobile = computed(() => globals.$isMobile());

const smoothScroll = inject('smoothScroll')
const scrollTo = (el) => {
  smoothScroll({
    scrollTo: document.querySelector(el)
  })
}
</script>