<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { computed, getCurrentInstance } from "vue";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
//
const globals = getCurrentInstance().appContext.config.globalProperties;
const isMobile = computed(() => globals.$isMobile());
</script>

<template>
  <article class="s3  bg-[#0006]">
    <img class="decorate" src="./s3/decorate.png" alt="decorate" />
    <div class="wrapper">
      <div class="title block md:hidden">
        <h3 class="font-[Lexend]" data-aos="fade-up">Civic Axis</h3>
        <h2 data-aos="fade-zoom-in">
          市政軸心 綠藝共生
        </h2>
      </div>
      <div class="pic">
        <img data-aos="zoom-out" src="./s3/main_pic.webp" alt="main_pic" />
        <div class="caption">
          台中國家歌劇院 ｜ 實景拍攝
        </div>
      </div>
      <div class="text">
        <h3 class="font-[Lexend]" data-aos="fade-up">Civic Axis</h3>
        <h2 data-aos="fade-up" data-aos-delay="200">市政軸心 綠藝共生</h2>
        <p data-aos="fade-up" data-aos-delay="400">
          台中七期歌劇院首排。<br />
          惠中路&市政北五路，七期最核心。<br />
          市政中心的理性脈動，與歌劇院、夏綠地公園的<br class="block md:hidden" />
          感性節奏，共譜城市生活的極致平衡。<br />
          一座以國際都會尺度構築的綠藝地標，讓每一次<br class="block md:hidden" />
          回家，都像走進一幅恬靜的都會風景。
        </p>

        <div class="text＿pic">
          <!-- Swiper -->
          <Swiper :modules="[Navigation, Pagination, Autoplay]" :pagination="{
            el: '.custom-pagination-container',
            clickable: true
          }" :loop="true" :autoplay="{ delay: 3000 }">
            <SwiperSlide>
              <img src="./s3/pic01.jpg" alt="bg" />
              <div class="caption">
                夏綠地公園 ｜ 實景拍攝
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./s3/pic02.jpg" alt="bg" />
              <div class="caption">
                沙坑公園 ｜ 實景拍攝
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <img src="./s3/pic03.jpg" alt="bg" />
              <div class="caption">
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

  .decorate {
    position: absolute;
    width: sizem(330);
    top: sizem(280);
    left: 0;
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: size(455);
      top: 0;
      left: 0;
      z-index: 0;
    }
  }

  .wrapper {
    width: 100%;
    color: #fff;
    padding: sizem(60) 0 sizem(40) 0;
    margin: 0 auto;
    position: relative;
    z-index: 1;

    @media screen and (min-width: 768px) {
      padding: size(270) size(120) size(120) size(165);
      display: flex;
      gap: size(85);
      align-items: flex-start;
    }

    .title {
      padding-left: sizem(20);
      padding-right: sizem(20);
      padding-bottom: sizem(40);

      h3 {
        color: #b8984a;
        font-weight: 500;
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
      position: relative;
      overflow: hidden;
      width: sizem(350);

      img {
        width: 100%;
        vertical-align: middle;
      }

      @media screen and (min-width: 768px) {
        width: size(865);
      }
    }

    .caption {
      position: absolute;
      right: 0.5em;
      bottom: 0.5em;
      font-size: sizem(12);

      @media screen and (min-width: 768px) {
        font-size: size(15);
      }
    }


    .text {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column-reverse;

      @media screen and (min-width: 768px) {
        width: size(710);
        display: block;
        flex-direction: row;
      }

      h3 {
        color: #b8984a;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-weight: 500;
        display: none;

        @media screen and (min-width: 768px) {
          display: block;
          font-size: size(30);
        }
      }

      h2 {
        color: #fff;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-weight: 700;
        display: none;

        @media screen and (min-width: 768px) {
          display: block;
          font-size: size(38);
          padding-top: size(20);
          padding-bottom: size(20);
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
          font-size: size(17.5);
          line-height: 1.9;
        }
      }

      .text＿pic {
        position: relative;
        order: 2;
        width: 100%;
          margin-top: sizem(20);

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
