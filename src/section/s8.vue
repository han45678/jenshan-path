<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
</script>

<template>
  <article class="s8 font-['Noto_Serif_TC',serif]">
    <div class="txt">
      <h2><span data-aos="fade-up">安心學習 <span class="b">12</span>年快樂成長</span></h2>
      <img class="line" src="./s3/line.svg" alt="line">
      <p>
        <span data-aos="fade-up">從幼兒園到國中，外語能力從小紮根，培養國際觀。愛森國際幼兒園在家旁，上學好安心，父母好省心。和順國小、和順國中，沉浸雙語教育環境，孩子未來超前部署。</span>
      </p>
    </div>
    <div class="pic">
      <Swiper class="bg" :modules="[Navigation, Pagination, Autoplay]" :loop="true" :autoplay="{ delay: 3000 }">
        <SwiperSlide>
          <img src="./s8/pic01.jpg" alt="pic" />
          <div class="picname">和順國小</div>
          <div class="caption">現場實景修飾圖</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./s8/pic02.jpg" alt="pic" />
          <div class="picname">和順國中</div>
          <div class="caption">現場實景修飾圖</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./s8/pic03.jpg" alt="pic" />
          <div class="picname">愛森國際幼兒園</div>
          <div class="caption">現場實景修飾圖</div>
        </SwiperSlide>
      </Swiper>
    </div>

  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s8 {
  display: flex;
  flex-wrap: wrap;
  background-color: #E6E6E6;
  flex-direction:column-reverse;

  @media screen and (min-width: 768px) {
    justify-content: center;
     flex-direction:row;
  }

  .txt {
    padding: sizem(34) sizem(40) sizem(75) sizem(40);
    width: 100%;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
      padding: size(230) size(170) 0 size(150);
      width: calc(100% - size(1080));
      order: 2;
    }

    h2 {
      position: relative;

      &::before {
        content: '';
        background-image: url(./s3/title_line_m.svg);
        background-size: 100%;
        background-repeat: no-repeat;
        background-position: left top;
        width: 100%;
        height: 100%;

        @media screen and (min-width: 768px) {
          background-image: url(./s8/title_line.svg);
          background-size: size(460) auto;
        background-position: left top;
        }
        position: absolute;
        top: 0;
        left: 0;
      }

      font-size: sizem(20);
      padding-top: sizem(45);
      padding-left: sizem(16);
      .b{font-size: 1.2em;line-height: 1.3;}

      @media screen and (min-width: 768px) {
        padding-top: size(190);
        padding-left: size(30);
        font-size: size(36);
        margin-bottom: size(20);
      }
    }

    .line {
      display: block;
      margin-left: sizem(105);
      margin-right: auto;
      width: sizem(48);
      margin-top: sizem(10);
      margin-bottom: sizem(10);

      @media screen and (min-width: 768px) {
        margin-left: auto;
        width: size(140);
        margin-bottom: size(20);
      margin-top: 0;
      }
    }

    p {
      line-height: 1.8;
      font-size: sizem(12);
      padding-left: sizem(10);
      padding-right: sizem(10);
      color: #4D4D4D;
        padding: 0 2.5em 0 1.5em;

      @media screen and (min-width: 768px) {
        font-size: size(18);
        padding: 0 4em 0 2em;
      }
    }
  }

  .pic {
    position: relative;
    overflow: visible;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
      width: size(1080);
      order: 1;
      margin-bottom: 0
    }

    img {
      width: 100%;
    }

  }

  .swiper-slide {
    position: relative;
  }
  .picname {
    position: absolute;
    color: #000;
    font-weight: 600;
    font-size: sizem(15);
    top: sizem(24);
    left: sizem(27);
    background: #ccca;
    border: 1px solid #3B8281;
    width: 2.1em;padding:1.1em .5em;
    line-height: 1;

    @media screen and (min-width: 768px) {
      font-size: size(26);
      top: size(110);
      left: size(90);
    }
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
