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
      <img
        data-aos="zoom-out"
        src="./s6/map.jpg"
        alt="pic"
        class="cursor-pointer"
      />
    </div>

    <!-- modal -->
        <fullview
          v-if="showModal"
          @close="closeModal"
        />
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
    @media screen and (min-width: 768px) {
      width: size(800);
    }
    img {
      width: 100%;
    }
  }
}
</style>
<script setup>
import {computed, getCurrentInstance ,ref } from 'vue'
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