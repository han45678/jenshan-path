<template>
  <article class="s4">
    <div class="pic">
      <img src="./s4/pic.jpg" alt="pic">
    </div>
    <div class="text">
      <div class="bg">
        <img src="./s4/line.svg" alt="bg" v-if="!isMobile" />
        <img src="./s4/line_m.svg" alt="bg" v-else>
      </div>
      <div class="text-content font-['Noto_Serif_TC',serif]" data-aos="fade-up">
        <div class="item">
          <h3>安和大道</h3>
          <p>核心居域享繁華</p>
        </div>
        <div class="item">
          <h3>輕鬆成家</h3>
          <p>市心甜蜜<span>2</span>字頭</p>
        </div>
        <div class="item">
          <h3>直抵南科</h3>
          <p><span>5</span>分鐘北外環道</p>
        </div>
        <div class="item">
          <h3>學習贏家</h3>
          <p>住近資優文教區</p>
        </div>
        <div class="item">
          <h3>書香社區</h3>
          <p>日系書屋選冊宅</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s4 {
  position: relative;

  .pic {
    position: relative;

    @media screen and (max-width: 767px) {
      padding-bottom: sizem(95);

    }

    @media screen and (min-width: 768px) {
      width: 50%;
      margin-left: auto;
    }

    img {
      width: 100%;
      height: sizem(332);
      object-fit: cover;

      @media screen and (min-width: 768px) {
        height: size(1080);
      }
    }
  }

  .text {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    padding: sizem(10) sizem(20) sizem(20) sizem(20);

    @media screen and (min-width: 768px) {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: size(95) size(110);
    }

    .bg {
      border: 1px solid #3B8281;
      border-width: 1px 1px 0px 1px;
      position: absolute;
      top: sizem(30);
      left: sizem(30);
      width:sizem(315);
      height:sizem(370);
        @media screen and (min-width: 768px) {
          border-width: 1px 1px 1px 0px;
      top: 8%;
      left: size(140);
      width:calc(100% - #{size(220)});
      height: 84%;
        }

      &::after {
        content: "";
        background: #3B8281;
        position: absolute;
        bottom: 0;
        right: 0;
        width:sizem(150);
        height: 1px;
        @media screen and (min-width: 768px) {
        left: 0;
        right: auto;
        width: 1px;
        height: size(270);

        }
      }

      img {
        position: absolute;
        width: sizem(150);
        bottom: 0;
        left: -1px;
        transform: translateY(7%);
        @media screen and (min-width: 768px) {
        width: size(210);
        bottom: auto;
        top: -1px;
        left: 0;
        transform: translateX(-13%);

        }
      }
    }

    .text-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      @media screen and (max-width: 767px) {
        transform: translateX(size(20));
      }

      @media screen and (min-width: 768px) {
        margin-left: size(-30);
      }

      .item {

        border: 1px solid #3B8281;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        align-content: center;
        border-radius: 100%;
        text-align: center;
        width: sizem(110);
        aspect-ratio: 1/1;

        @media screen and (max-width: 767px) {

          &:nth-child(1),
          &:nth-child(2),
          &:nth-child(3) {
            margin-left: sizem(-7.5);
          }

          &:nth-child(4),
          &:nth-child(5) {
            margin-top: sizem(-22.5);
          }
        }

        @media screen and (min-width: 768px) {
          width: size(180);
          height: size(180);
          margin-left: size(-15);
        }

        h3 {

          font-weight: 500;
          border-bottom: 2.5px solid #3B8281;
          font-size: sizem(16);
          padding-bottom: sizem(10);
          margin-bottom: sizem(10);

          @media screen and (min-width: 768px) {
            border-bottom: 4px solid #3B8281;
            width: size(100);
            font-size: size(24);
            padding-bottom: size(15);
            margin-bottom: size(15);
          }
        }

        p {
          width: 100%;
          font-weight: 500;
          font-size: sizem(10);

          @media screen and (min-width: 768px) {
            font-size: size(16);
          }

          span {
            color: #F15A24;
          }
        }
      }
    }
  }
}
</style>

<script setup>
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