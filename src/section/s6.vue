<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
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

<template>
  <article class="s6">
    <div class="txt font-['Noto_Serif_TC',serif]">
      <h2>
        <span data-aos="fade-up">安享便捷<br v-if="isMobile" /> 5分鐘北外環道</span>
      </h2>
      <img class="line" src="./s3/line.svg" alt="line">
      <p>
        <span data-aos="fade-up">安和路寬達24米，交通四通八達，駕車約5分鐘即可瞬接北外環，速抵南科、國道1號、國道8號，通勤移動效率滿分，南北奔馳更快意。</span>
      </p>
    </div>
    <div class="pic">
      <!-- 上一張 -->
      <div class="custom-prev nav-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
          <path
            d="M19.4044 31.1339C18.8676 31.6708 17.9961 31.6706 17.4591 31.1339L7.4054 21.0802C6.86849 20.5432 6.86849 19.6718 7.4054 19.1349L17.4591 9.08117C17.9961 8.54434 18.8675 8.54429 19.4044 9.08117C19.9411 9.61813 19.9412 10.4896 19.4044 11.0265L10.3234 20.1075L19.4044 29.1886C19.9411 29.7256 19.9413 30.597 19.4044 31.1339Z"
            fill="#3B8281" />
        </svg>
      </div>

      <!-- 下一張 -->
      <div class="custom-next nav-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="23" viewBox="0 0 13 23" fill="none">
          <path
            d="M0.402344 0.402588C0.939208 -0.134276 1.81066 -0.134062 2.34766 0.402588L12.4014 10.4563C12.9383 10.9933 12.9383 11.8647 12.4014 12.4016L2.34766 22.4553C1.81069 22.9922 0.939279 22.9922 0.402344 22.4553C-0.134313 21.9184 -0.134418 21.0469 0.402344 20.51L9.4834 11.429L0.402344 2.3479C-0.134298 1.81091 -0.134494 0.939454 0.402344 0.402588Z"
            fill="#3B8281" />
        </svg>
      </div>

      <!-- Swiper -->
      <Swiper class="bg" :modules="[Navigation, Pagination, Autoplay]"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        :pagination="{ el: '.custom-pagination-container', clickable: true }" :loop="true" :autoplay="{ delay: 3000 }">
        <SwiperSlide>
          <img src="./s6/pic01.jpg" alt="bg" />
          <div class="caption font-['Noto_Serif_TC',serif]">現場實景修飾圖</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./s6/pic02.jpg" alt="bg" />
          <div class="caption font-['Noto_Serif_TC',serif]">現場實景修飾圖</div>
        </SwiperSlide>

        <!-- 分頁圓點放這裡 -->
        <div class="custom-pagination-container"></div>
      </Swiper>
    </div>

  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s6 {
  display: flex;
  flex-wrap: wrap;
  background-color: #E6E6E6;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: size(180);
    padding: size(165) size(195) size(130) size(145);
  }

  .txt {
    padding: sizem(70) sizem(40) sizem(55) sizem(40);
    width: 100%;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
      padding: 0 0 0 size(15);
      width: size(450);
      margin: size(-20) auto auto auto;
      order: 2;
    }

    h2 {
      position: relative;

      &::before {
        content: '';
        background-image: url(./s3/title_line_m.svg);
        background-size: sizem(290);
        background-repeat: no-repeat;
        background-position: left center;
        width: 100%;
        height: 100%;

        @media screen and (min-width: 768px) {
          background-image: url(./s6/title_line.svg);
          background-size: size(420) auto;
        background-position: left center;
        }

        position: absolute;
        top: 0;
        left: 0;
      }

      font-size: sizem(20);
      padding-top: sizem(55);
      padding-left: sizem(16);

      @media screen and (min-width: 768px) {
        padding-top: size(195);
        padding-left: size(30);
        font-size: size(36);
        margin-bottom: size(20);
      }
    }

    .line {
      display: block;
      margin-left: sizem(60);
      margin-right: auto;
      width: sizem(48);
      margin-top: sizem(10);
      margin-bottom: sizem(10);

      @media screen and (min-width: 768px) {
        margin-left: auto;
        width: size(140);
      margin-top: size(10);
        margin-bottom: size(20);
      }
    }

    p {
      line-height: 1.8;
      font-size: sizem(12);
      color: #4D4D4D;
        padding: 0 5.5em 0 1.5em;

      @media screen and (min-width: 768px) {
        font-size: size(18);
        padding: 0 0 0 2em;
      }
    }
  }

  .pic {
    position: relative;
    overflow: visible;
    width: calc(100% - sizem(80));
    margin-left: auto;
    margin-right: auto;
    margin-bottom: sizem(40);


    @media screen and (min-width: 768px) {
      width: size(900);
      order: 1;
      margin-bottom: 0
    }

    .nav-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: sizem(40);
      height: sizem(40);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (min-width: 768px) {
        display: none;
      }

      &.custom-prev {
        left: sizem(-37.5);
      }

      &.custom-next {
        right: sizem(-40);
      }
    }

    .custom-pagination-container {
      display: none;
      text-align: right;

      @media screen and (min-width: 768px) {
        display: block;
      }

      .swiper-pagination-bullet {
        background-color: transparent;
        border-radius: 0;
        width: size(12);
        height: size(12);
        border: 2px solid #3B8281;
        box-sizing: border-box;
        padding: 0;

        &.swiper-pagination-bullet-active {
          background-color: #3B8281;
        }
      }
    }

    img {
      width: 100%;
    }

  }

  
  .swiper-slide {
    position: relative;
  }

  .caption {
    color: #fff;
    font-weight: 600;
    font-size: sizem(10);
    bottom: sizem(10);
    right: sizem(10);
    position: absolute;

    @media screen and (min-width: 768px) {
      font-size: size(16);
      bottom: size(10);
      right: size(10);
    }
  }
}
</style>