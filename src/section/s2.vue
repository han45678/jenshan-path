<template>
  <section class="s2 w-full relative">
    <div class="bg hidden md:block">
      <img
        src="./s2/bg.webp"
        alt="bg"
        data-aos="zoom-out"
      />
    </div>
      <fullview class="block md:hidden" />
    <div class="text">
      <h2>
        七期之上<br />唯一可被收藏的座標
      </h2>
      <p class="font-[Lexend]">Collected Coordinate</p>

    <!--   <img
        class="logo hidden md:block"
        src="./s2/logo.svg"
        alt="logo"
        data-aos="fade-up"
      /> -->
    </div>
  </section>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s2 {
  width: 100%;
  height: sizem(800);
  position: relative;
  overflow: hidden;
  background: #036;
  @media screen and (min-width: 768px) {
    height: size(774);
  }
  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    inset: 0;
    margin: auto;
    pointer-events: none;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    @media screen and (max-width: 767px) {
      
    img {
      position: relative;
      left: -135%;
      width: 250%;
      height: 100%;
      object-fit: cover;
    }
    }
  }
  .viewbox{
    height: sizem(800);
  }
  .text {
    position: absolute;
    top: sizem(60);
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-align: center;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    pointer-events: none;
    @media screen and (min-width: 768px) {
      text-align: right;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    h2 {
      color: #fff;
      font-size: sizem(28);
      font-weight: 700;
      line-height: 1.4;
      width: sizem(300);
      @media screen and (min-width: 768px) {
        font-size: size(38);
        width: auto;
      }
    }
    p {
      color: #e8c36a;
      margin-top: sizem(10);
      font-size: sizem(16);
      font-weight: 400;
      @media screen and (min-width: 768px) {
        margin-top: size(30);
        font-size: size(30);
      }
    }
    .logo {
      width: sizem(100);
      margin-top: sizem(55);
      filter: drop-shadow(0 0 14px rgba(0, 8, 95, 0.8));
      @media screen and (min-width: 768px) {
        margin-top: 0;
        position: absolute;
        left: calc(100% + size(15));
        width: size(180);
        top: size(-120);
      }
    }
  }
}
</style>

<script setup>
 import fullview from '@/components/fullview.vue';
</script>
