<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
</script>

<template>
  <article class="s3">
    <div class="wrapper">
      <div class="title block md:hidden">
        <h3 class="font-['Gill Sans',serif]">Civic Axis</h3>
        <h2 class="font-['Noto_Serif_TC',serif]">市政軸心 綠藝共生</h2>
      </div>
      <div class="pic">
        <img
          src="./s3/main_pic.webp"
          alt="main_pic"
        />
      </div>
      <div class="text">
        <h3 class="font-['Gill Sans',serif]">Civic Axis</h3>
        <h2 class="font-['Noto_Serif_TC',serif]">市政軸心 綠藝共生</h2>
        <p class="font-['Noto_Serif_TC',serif]">
          台中七期歌劇院首排<br class="win_bg block md:hidden" />
          惠中路&市政北五路，七期最核心<br />
          市政中心的理性脈動，與歌劇院、夏綠地公園的<br
            class="block md:hidden"
          />
          感性節奏，共譜城市生活的極致平衡。<br />
          一座以國際都會尺度構築的綠藝地標，讓每一次<br
            class="block md:hidden"
          />
          回家，都像走進一幅恬靜的都會風景。
        </p>

        <div class="text＿pic">
          <!-- Swiper -->
          <Swiper
            :modules="[Navigation, Pagination, Autoplay]"
            :pagination="{
              el: '.custom-pagination-container',
              clickable: true
            }"
            :loop="true"
            :autoplay="{ delay: 3000 }"
          >
            <SwiperSlide>
              <img
                src="./s3/pic01.jpg"
                alt="bg"
              />
              <div class="caption font-['Noto_Serif_TC',serif]">
                夏綠地公園 ｜ 實景拍攝
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./s3/pic02.jpg"
                alt="bg"
              />
              <div class="caption font-['Noto_Serif_TC',serif]">
                沙坑公園 ｜ 實景拍攝
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./s3/pic03.jpg"
                alt="bg"
              />
              <div class="caption font-['Noto_Serif_TC',serif]">
                新市政公園 ｜ 實景拍攝
              </div>
            </SwiperSlide>

            <!-- 分頁圓點放這裡 -->
            <div class="custom-pagination-container"></div>
          </Swiper>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss">
@import '@/assets/style/function.scss';

.s3 {
  position: relative;
  .wrapper {
    width: 100%;
    color: #fff;
    padding: sizem(60) 0 sizem(40) 0;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      padding: size(270) size(120) size(120) size(165);
      display: flex;
      gap: size(85);
    }
    .title {
      padding-left: sizem(20);
      padding-right: sizem(20);
      padding-bottom: sizem(40);
      h3 {
        color: #b8984a;
        font-weight: 400;
        font-size: sizem(16);
        text-shadow: 0 0 5.625px rgba(0, 0, 0, 0.65);
      }
      h2 {
        color: #fff;
        font-weight: 700;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);

        font-size: sizem(24);
      }
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
      display: flex;
      flex-wrap: wrap;
      @media screen and (min-width: 768px) {
        width: size(710);
        display: block;
      }
      h3 {
        color: #b8984a;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-weight: 400;
        display: none;
        @media screen and (min-width: 768px) {
          display: block;
          font-size: 30px;
        }
      }
      h2 {
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-weight: 700;
        display: none;

        @media screen and (min-width: 768px) {
          display: block;
          font-size: 38px;
          padding-top: 20px;
          padding-bottom: 20px;
        }
      }
      p {
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);

        font-weight: 500;
        line-height: 2.4;
        padding-top: sizem(30);
        padding-left: sizem(35);
        padding-right: sizem(35);
        padding-bottom: sizem(15);
        order: 1;
        @media screen and (min-width: 768px) {
          padding-top: 0;
          padding-left: 0;
          padding-right: 0;
          padding-bottom: 0;
          font-size: 18px;
          line-height: 1.9;
        }
      }
      .text＿pic {
        position: relative;
        order: 2;
        width: 100%;
        @media screen and (min-width: 768px) {
          width: size(425);
          margin-top: size(65);
        }

        .swiper {
          @media screen and (min-width: 768px) {
            padding-bottom: size(80);
          }
          .swiper-wrapper {
            .swiper-slide {
              position: relative;
              .caption {
                position: absolute;
                right: sizem(5);
                bottom: sizem(5);
                @media screen and (min-width: 768px) {
                  right: size(5);
                  bottom: size(5);
                }
              }
              img {
                width: 100%;
                padding-left: sizem(75);
                @media screen and (min-width: 768px) {
                  padding-left: 0;
                }
              }
            }
          }
          .custom-pagination-container {
            position: absolute;
            width: sizem(75);
            left: 0;
            bottom: sizem(5);
            display: flex;
            justify-content: center;
            @media screen and (min-width: 768px) {
              display: block;
              justify-content: unset;
              width: size(425);
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
        }
      }
    }
  }
}
</style>
