<template>
  <article class="s5">
    <img class="bg hidden md:block" src="./s5/bg.jpg" alt="bg">
    <img class="bg block md:hidden" src="./s5/bgm.jpg" alt="bg">
    <div class="win" data-aos="zoom-in">
      <img class="win_bg hidden md:block" src="./s5/bg.jpg" alt="bg">
      <img class="win_bg block md:hidden" src="./s5/bgm.jpg" alt="bg">
      <div class="text" data-aos="fade-up">
        <h2 class="font-['Noto_Serif_TC',serif]">
          安<br>
          心<br>
          <img src="./s5/line.svg" alt="bg"><br>
          生<br>
          活
        </h2>
        <p class="font-['Noto_Serif_TC',serif]">
          和幸福溫柔相約<br>
          當繁華遇見寧靜，關於未來的美好故事，<br class="hidden md:block">
          倚著安和路展開
        </p>
      </div>
    </div>
    <div class="caption font-['Noto_Serif_TC',serif]">情境示意圖</div>
  </article>
</template>

<style lang="scss" scoped>
@import "@/assets/style/function.scss";

.s5 {
  position: relative;
  overflow: hidden;
  aspect-ratio: 9/16;

  @media screen and (min-width: 768px) {
    aspect-ratio: 16/9;
  }

  .bg {
    width: 100dvw;
    aspect-ratio: 9/16;
    filter: blur(5px);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 768px) {
      aspect-ratio: 16/9;
    }


  }

  .win {
    position: absolute;
    top: 50%;
    left: 50%;

    // width: calc(100% - sizem(70));
    width: sizem(100);
    height: calc(100% - sizem(70));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #fff;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      // width: calc(100% - size(180));
      width: size(275);
      height: calc(100% - size(220));
    }

    &[data-aos^=zoom][data-aos^=zoom] {
      opacity: 1 !important;
      transition: 2s ease-in-out;

      &.aos-animate {
        transform: translate(-50%, -50%) !important;
        width: calc(100% - sizem(70));

        @media screen and (min-width: 768px) {
          width: calc(100% - size(180));
        }
      }
    }

    .text {
      width: 100%;
      height: 100%;
      //   border: 1px solid #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      align-content: center;
      text-align: center;
      color: #fff;

      h2 {
        width: 100%;
        text-align: center;
        font-size: sizem(32);
        font-weight: 600;
        line-height: 1;
        padding-bottom: sizem(25);

        @media screen and (min-width: 768px) {
          font-size: size(60);
          padding-bottom: size(50);
        }

        img {
          width: sizem(12);
          height: sizem(58);
          padding-top: sizem(5);
          padding-bottom: sizem(5);

          @media screen and (min-width: 768px) {
            width: size(24);
            height: size(110);
            padding-top: size(10);
            padding-bottom: size(7.5);
          }
        }
      }

      p {
        font-weight: 600;
        line-height: 1.4;
        width: sizem(260);
        font-size: sizem(12);
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.40);

        @media screen and (min-width: 768px) {
          width: size(645);
          font-size: size(26);
        }
      }
    }

    .win_bg {
      width: 100dvw;
      aspect-ratio: 9/16;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      @media screen and (min-width: 768px) {
        aspect-ratio: 16/9;
      }
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
