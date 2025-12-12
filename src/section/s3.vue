<template>
  <article class="s3">
    <div class="txt font-['Noto_Serif_TC',serif]">
      <h2>
        <span data-aos="fade-up">安南匯聚四大園區</span>
      </h2>
      <img class="line" src="./s3/line.svg" alt="line">
      <p>
        <span data-aos="fade-up">
          台南科技工業區、和順工業區、新吉工業區、總頭寮工業區，攜手南科全球半導體聚落共榮，領航台南經濟命脈。重大建設推動城市升級，繁榮新景持續擴展，坐享宜居優勢，未來增值無限。
        </span>
      </p>
    </div>
    <div class="_viewbox">
      <fullview />
    </div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s3 {
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: size(265);
    padding: size(165) size(185) size(165) size(125);
  }

  .txt {
    padding: sizem(70) sizem(40) sizem(55) sizem(40);
    width: 100%;
    box-sizing: border-box;
    position: relative;

    @media screen and (min-width: 768px) {
      padding: 0 0 0 size(15);
      width: size(345);
      order: 2;
    }

    h2 {
      position: relative;

      &::before {
        content: '';
        background-image: url(./s3/title_line_m.svg);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: left top;
        width: 100%;
        height: 100%;

        @media screen and (min-width: 768px) {
          background-image: url(./s3/title_line.svg);
        }

        position: absolute;
        top: 0;
        left: 0;
      }

      font-size: sizem(20);
      padding-top: sizem(48);
      padding-left: sizem(15);

      @media screen and (min-width: 768px) {
        padding-top: size(185);
        padding-left: size(30);
        font-size: size(36);
        margin-bottom: 0;
      }
    }

    .line {
      display: block;
      margin: sizem(10) auto sizem(10) sizem(72);
      width: sizem(48);

      @media screen and (min-width: 768px) {
        width: size(140);
        margin: size(20) auto size(20) auto;
      }
    }

    p {
      line-height: 1.8;
      font-size: sizem(12);
      padding: 0 5.5em 0 1.5em;
      color: #4D4D4D;

      @media screen and (min-width: 768px) {
        font-size: size(19);
        padding: 0 1em;

      }
    }
  }

  ._viewbox {
    overflow: hidden;
    width: 100%;
    height: sizem(385);

    @media screen and (min-width: 768px) {
      width: size(900);
      order: 1;
      height: size(745);
    }
  }
}
</style>

<script setup>
import fullview from "@/components/fullview.vue"
import { computed, getCurrentInstance, ref, inject, onMounted } from "vue"
const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())
</script>