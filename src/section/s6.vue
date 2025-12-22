<template>
  <article class="s6 bg-[#0008]">
    <div class="text">
      <h3 class="font-[Lexend]" data-aos="fade-zoom-in">
        <span>Full-Spectrum Functionality</span>
      </h3>
      <h2 data-aos="fade-zoom-in">
        市政中軸<br class="block md:hidden" />
        串聯全方位機能<br />
        構築菁英家庭<br class="block md:hidden" />
        最從容的生活日常
      </h2>
    </div>
    <!-- 圖片點擊 -->
    <div class="pic" @click="openModal">
      <img data-aos="zoom-out" src="./s6/map.jpg" alt="pic" class="cursor-pointer" />
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 30 30">
          <path
            d="M25.3,13.1c0,6.4-5.2,11.6-11.6,11.6S2.1,19.6,2.1,13.1,7.3,1.5,13.7,1.5s11.6,5.2,11.6,11.6ZM27.9,28.5l-5.9-5.9"
            fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3" />
        </svg>
        <span>放大看詳細</span>
      </div>
    </div>

    <!-- modal -->
    <fullview v-if="showModal" @close="closeModal" />
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s6 {
  width: 100%;
  padding: sizem(60) sizem(35);
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: size(150) size(250) size(210) size(200);
    gap: size(90);
  }

  .text {
    text-align: right;

    @media screen and (min-width: 768px) {
      width: size(570);
    }

    h3 {
      font-weight: 500;
      color: #b8984a;
      text-shadow: 0 0 sizem(5.625) rgba(0, 0, 0, 0.65);
      font-size: sizem(16);

      @media screen and (min-width: 768px) {
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-size: size(30);
      }
    }

    h2 {
      color: #fff;
      font-weight: 700;
      text-shadow: 0 0 sizem(10) rgba(0, 0, 0, 0.65);
      font-size: sizem(28);
      padding-top: sizem(15);
      padding-bottom: sizem(20);

      @media screen and (min-width: 768px) {
        text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
        font-size: size(38);
        padding-top: size(20);
        padding-bottom: size(20);
      }
    }
  }

  .pic {
    position: relative;

    @media screen and (min-width: 768px) {
      width: size(800);
    }

    img {
      width: 100%;
    }

    .icon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      left: 0;
      margin: auto;
      background: #0368;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      width: 8em;
      height: 8em;
      display: flex;
      gap:0;
      color: #fff;
      font-size: sizem(12);
      border-radius: 2em;

      svg {
        width: 2.5em;
        height: 2.5em;
        margin:.8em auto 1em auto;
      }

      @media screen and (min-width: 768px) {
        font-size: size(14);
      }
    }
  }
}
</style>
<script setup>
import { computed, getCurrentInstance, ref } from 'vue'
import fullview from '@/components/fullview3.vue';

const showModal = ref(false)

const openModal = () => {
  showModal.value = true
  document.body.style.overflow = 'hidden' // 防止背景滾動
}

const closeModal = () => {
  showModal.value = false
  document.body.style.overflow = ''
}
</script>