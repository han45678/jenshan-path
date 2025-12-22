<script setup>
  import fullview from '@/components/fullview2.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script>

<template>
  <article class="s7 bg-[#0008]">
    <div class="r" data-aos="fade" data-aos-delay="200"><img src="./s1/r.webp" alt="logo" /></div>
    <div class="title block md:hidden">
      <h3 class="font-[Lexend]"><span data-aos="fade-zoom-in">Prestigious Living</span></h3>
      <h2 data-aos="fade-zoom-in">生活的款待 空間的藝術</h2>
    </div>
    <div class="banner">
      <img
        class="hidden md:block"
        src="./s7/banner.jpg"
        alt="bg"
      />
      <div class="caption">1F大廳 ｜ 實景拍攝</div>

      <fullview class="block md:hidden" />
    </div>
    <div class="pic">
      <Swiper
        :modules="[Navigation, Pagination, Autoplay]"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        :pagination="{ el: '.swiper-pagination' }"
      >
        <SwiperSlide>
          <img
            src="./s7/pic01.jpg"
            alt="bg"
          />
          <div class="caption">
            2F交誼廳 ｜ 實景拍攝
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./s7/pic02.jpg"
            alt="bg"
          />
          <div class="caption">
            2F會議室 ｜ 實景拍攝
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./s7/pic03.jpg"
            alt="bg"
          />
          <div class="caption">
            2F健身房 ｜ 實景拍攝
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./s7/pic04.jpg"
            alt="bg"
          />
          <div class="caption">
            頂樓娛樂室 ｜ 實景拍攝
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./s7/pic05.jpg"
            alt="bg"
          />
          <div class="caption">
            頂樓娛樂室 ｜ 實景拍攝
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="text">
      <h3 class="hidden md:block font-[Lexend]">
        <span>Prestigious Living</span>
      </h3>
      <h2 class="hidden md:block">
        生活的款待 空間的藝術
      </h2>
      <p>
        挑高7.5米迎賓門廳，彰顯歸家的尊榮儀式；<br />
        閱覽室的靜謐深思、健身房的律動節奏、<br />
        交誼廳的雅聚氛圍，皆構築出日常的從容美學。<br />
        登上高空Sky Lounge，俯瞰七期城市天際，<br />
        在夜色與星光之間，是都會菁英專屬的片刻奢華。
      </p>
      <div class="swiper-pagination"></div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s7 {
  display: flex;
  flex-wrap: wrap;
  gap: sizem(20);
  justify-content: center;
  align-items: center;
  padding-top: sizem(60);
  padding-bottom: sizem(60);position: relative;
  @media screen and (min-width: 768px) {
    gap: size(95);
    padding-top: 0;
    padding-bottom: size(110);
  }

  .banner {
    width: 100%;
    position: relative;
    img {
      width: 100%;
    }
  }
  .pic {
    width: calc(100% - sizem(95));
    margin-right: sizem(95);
    @media screen and (min-width: 768px) {
      margin-right: 0;
      width: size(475);
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
  .text {
    position: relative;
    width: 100%;
    @media screen and (min-width: 768px) {
      width: size(400);
    }
    
  }
  h3 {
    font-weight: 500;
    color: #b8984a;
    text-shadow: 0 0 sizem(5.625) rgba(0, 0, 0, 0.65);
    font-size: sizem(16.875);
    align-items: center;
    justify-content: space-between;
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
      padding-bottom: size(30);
    }
  }
  p {
    color: #fff;
    font-weight: 500;
    padding-left: sizem(15);
    padding-right: sizem(15);
    text-shadow: 0 0 sizem(10) rgba(0, 0, 0, 0.65);
    font-size: sizem(14);
    line-height: sizem(30);
    @media screen and (min-width: 768px) {
      text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
      padding-left: 0;
      padding-right: 0;
      font-size: size(18);
      line-height: size(34);
    }
  }
  .caption {
    color: #fff;
    font-weight: 600;
    font-size: sizem(10);
    bottom: sizem(10);
    right: sizem(10);
    position: absolute;
    z-index: 1;

    @media screen and (min-width: 768px) {
      font-size: size(16);
      bottom: size(10);
      right: size(10);
    }
  }
  .r {
      width: sizem(210);
      position: absolute;
      right:  sizem(-50);
      top: sizem(270);
      img{width: 100%;transform: scaleX(-1);}

      @media screen and (min-width: 768px) {
        width: size(410); right:size(-120);
        top: size(380);
      }
    }
}
</style>

<style lang="scss">
@import '@/assets/style/function.scss';
  .swiper-pagination {
      position: absolute;
      width: sizem(95);
      position: absolute;
      right: 0;
      left: unset;
      top: sizem(-40);
      text-align: right;
      @media screen and (min-width: 768px) {
        margin-top: size(40);
        position: static;
        left: unset;
        right: unset;
        bottom: unset;
        top: unset;
        text-align: left;
      }
      .swiper-pagination-bullet {
        background-color: transparent;
        border-radius: 0;
        width: sizem(10);
        height: sizem(10);
        border-radius: 100%;
        border: sizem(2) solid #fff;
        box-sizing: border-box;
        padding: 0;

        @media screen and (min-width: 768px) {
          border: size(2) solid #fff;
          width: size(10);
          height: size(10);
        }

        &.swiper-pagination-bullet-active {
          background-color: #fff;
        }
      }

      
    }
</style>