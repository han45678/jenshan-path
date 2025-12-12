<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>

<template>
  <article class="s3">
    <div class="wrapper">
      <div class="pic">
        <img
          src="./s3/main_pic.webp"
          alt="main_pic"
        />
      </div>
      <div class="text">
        <h3 class="font-['Gill Sans',serif]">Civic Axis</h3>
        <h2 class="font-['Noto_Serif_TC',serif]">市政軸心 綠藝共生</h2>
        <p>
          台中七期歌劇院首排惠中路&市政北五路，七期最核心<br />
          市政中心的理性脈動，與歌劇院、夏綠地公園的感性節奏，共譜城市生活的極致平衡。<br />
          一座以國際都會尺度構築的綠藝地標，讓每一次回家，都像走進一幅恬靜的都會風景。
        </p>

        <div class="text＿pic">
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
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s3 {
  background-image: url(@/section/s3/bg.webp);
  background-size: cover;
  position: relative;
  .wrapper {
    width: 100%;
    color: #fff;
    padding: size(60) 0 size(40) 0;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      padding: size(270) size(120) size(120) size(165);
      display: flex;
      gap: size(85);
    }

    .pic {
      img {
        width: 100%;
      }
      @media screen and (min-width: 768px) {
        width: size(865);
      }
    }
    .text {
      width: 100%;
      @media screen and (min-width: 768px) {
        width: size(685);
      }
      h3 {
        color: #b8984a;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-weight: 400;
        @media screen and (min-width: 768px) {
          font-size: 30px;
        }
      }
      h2 {
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-weight: 700;

        @media screen and (min-width: 768px) {
          font-size: 38px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
      p {
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);

        font-weight: 500;
        line-height: 1.9;
        @media screen and (min-width: 768px) {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
