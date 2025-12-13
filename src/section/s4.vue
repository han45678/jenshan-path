<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script>

<template>
  <article class="s4">
    <div class="text">
      <h3 class="font-['Gill Sans',serif]">Stylish</h3>
      <h2 class="font-['Noto_Serif_TC',serif]">時尚光影的生活軸帶</h2>
      <p class="hidden md:block font-['Noto_Serif_TC',serif]">
        新光三越、大遠百雙百貨環伺，繁華與品味於步行之間流轉，日常的午後，是隨興的精品漫遊。<br />
        生活的每個瞬間，都是自然而然的精緻篇章。<br />
        繁華近在咫尺，卻始終保有恬靜的生活韻度
      </p>
    </div>
    <div class="pic">
      <div class="right">
        <img
          src="./s4/pic03.jpg"
          alt="pic"
        />
        <div class="caption font-['Noto_Serif_TC',serif]">情境示意圖</div>
      </div>

      <div class="left">
        <Swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :loop="true"
          :autoplay="{ delay: 3000 }"
        >
          <SwiperSlide>
            <img
              src="./s4/pic01.jpg"
              alt="bg"
            />
            <div class="caption font-['Noto_Serif_TC',serif]">情境示意圖</div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="./s4/pic02.jpg"
              alt="bg"
            />
            <div class="caption font-['Noto_Serif_TC',serif]">情境示意圖</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <p class="block md:hidden font-['Noto_Serif_TC',serif]">
      新光三越、大遠百雙百貨環伺，繁華與品味於步行之間流轉，日常的午後，是隨興的精品漫遊。<br />
      生活的每個瞬間，都是自然而然的精緻篇章。<br />
      繁華近在咫尺，卻始終保有恬靜的生活韻度
    </p>
    <div class="slogan font-['Gill Sans',serif]">
      A lifestyle where fashion meets light and shadow
    </div>

    <img
      class="decorate"
      src="./s4/decorate.png"
      alt="decorate"
    />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s4 {
  position: relative;

  .text {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: sizem(35);
    padding-left: sizem(35);
    padding-right: sizem(35);
    @media screen and (min-width: 768px) {
      text-align: center;
      padding-bottom: size(50);
      max-width: size(775);
      padding-left: 0;
      padding-right: 0;
    }
  }
  h3 {
    color: #b8984a;
    font-weight: 400;

    color: #b8984a;
    text-shadow: 0 0 sizem(5.625) rgba(0, 0, 0, 0.65);
    font-size: 16;

    @media screen and (min-width: 768px) {
      text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
      font-size: size(30);
    }
  }
  h2 {
    color: #fff;
    font-weight: 700;
    text-shadow: 0 0 sizem(10) rgba(0, 0, 0, 0.65);
    font-size: sizem(28);

    @media screen and (min-width: 768px) {
      text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
      font-size: size(38);
      padding-top: size(15);
      padding-bottom: size(15);
    }
  }
  p {
    color: #fff;
    font-weight: 500;
    text-shadow: 0 0 sizem(10) rgba(0, 0, 0, 0.65);
    font-size: sizem(14);
    line-height: sizem(34);
    padding-top: sizem(30);
    padding-bottom: sizem(35);
    padding-left: sizem(35);
    padding-right: sizem(35);

    @media screen and (min-width: 768px) {
      text-align: center;
      font-size: size(18);
      text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
      padding-top: 0;
      padding-bottom: 0;
      padding-left: 0;
      padding-right: 0;
      line-height: size(34);
    }
  }
  .pic {
    @media screen and (min-width: 768px) {
      display: flex;
      gap: size(20);
    }
    .caption {
      position: absolute;
      right: sizem(15);
      bottom: sizem(15);
      color: #fff;
      @media screen and (min-width: 768px) {
        right: size(15);
        bottom: size(15);
      }
    }
    .left {
      width: sizem(220);
      @media screen and (min-width: 768px) {
        width: size(445);
        order: 1;
      }
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
            position: relative;

            img {
              width: 100%;
            }
          }
        }
      }
    }
    .right {
      position: relative;
      width: calc(100% - sizem(25));
      margin-left: sizem(25);
      margin-bottom: sizem(20);
      @media screen and (min-width: 768px) {
        margin-left: 0;
        margin-bottom: 0;
        width: calc(100% - size(445) - size(20));
        order: 2;
      }
      img {
        width: 100%;
      }
    }
  }

  .slogan {
    color: #c5a24e;
    text-align: center;

    font-size: sizem(12);
    font-weight: 400;
    line-height: sizem(16.744);
    padding-top: sizem(30);
    padding-bottom: sizem(30);

    @media screen and (min-width: 768px) {
      font-size: size(16);
      line-height: size(24);
      padding-top: size(30);
      padding-bottom: size(30);
    }
  }

  .decorate {
    position: absolute;
    top: sizem(350);
    transform: rotate(-90deg);
    width: sizem(100);
    right: sizem(20);
    @media screen and (min-width: 768px) {
      width: size(220);
      top: size(-80);
      right: 0;
      z-index: 0;
    }
  }
}
</style>
