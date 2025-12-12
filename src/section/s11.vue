<template>
  <article class="s11">
    <div class="txt font-['Noto_Serif_TC',serif]">
      <h2><span data-aos="fade-up">安家推手 幸福成家圓夢</span></h2>
      <img class="line" src="./s3/line.svg" alt="line">
      <p>
        <span data-aos="fade-up">佳展建設嚴選潛力地段，讓建築昇華，與土地共映美好生活。構築一棟棟理想寓所，陪伴2000+戶家庭溫馨成家。深耕台南，悉心打造家的經典。</span>
      </p>
    </div>
    <div class="pic">
      <div class="pic_left">
        <div class="item">
          <img src="./s11/pic01-1.webp" alt="pic">
          <p class="font-['Noto_Serif_TC',serif]">
            佳<br>
            展<br>
            大<br>
            展
          </p>
        </div>
        <div class="item">
          <img src="./s11/pic01-2.webp" alt="pic">
          <p class="font-['Noto_Serif_TC',serif]">
            佳<br>
            展<br>
            大<br>
            方
          </p>
        </div>
        <div class="item">
          <img src="./s11/pic01-3.webp" alt="pic">
          <p class="font-['Noto_Serif_TC',serif]">
            佳<br>
            展<br>
            大<br>
            展
          </p>
        </div>
      </div>
      <div class="pic_right">

        <img class="main" src="./s11/pic02.webp" alt="pic">

        <img class="light01" src="./s11/light01.webp" alt="light">

        <img class="light02" src="./s11/light02.webp" alt="light">

        <p class="font-['Noto_Serif_TC',serif]">
          佳<br>
          展<br>
          安<br>
          和
        </p>
      </div>
    </div>

  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s11 {
  display: flex;
  flex-wrap: wrap;
  background-image: url(./s7/bg.jpg);
  background-size: cover;

  @media screen and (min-width: 768px) {
    justify-content: center;
    gap: size(80);
    padding: size(85) 0 0 size(205);
  }

  .txt {
    padding: sizem(70) sizem(40) sizem(40) sizem(40);
    width: 100%;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
      padding: size(150) 0 0 size(15);
      width: size(450);
      // order: 2;
    }

    h2 {
      position: relative;

      &::before {
        content: '';
        background-image: url(./s7/title_line_m.svg);
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: left top;
        width: 100%;
        height: 100%;

        @media screen and (min-width: 768px) {
          background-image: url(./s11/title_line.svg);
        }

        position: absolute;
        top: 0;
        left: 0;
      }

      font-size: sizem(20);
      padding-top: sizem(45);
      padding-right: sizem(16);
      text-align: right;

      @media screen and (min-width: 768px) {
        padding-top: size(195);
        padding-left: size(30);
        font-size: size(36);
        margin-bottom: size(20);
      text-align: left;
      }
    }

    .line {
      display: block;
      margin-left: sizem(150);
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
        padding: 0 1.5em 0 4.5em;

      @media screen and (min-width: 768px) {
        font-size: size(18);
        padding: 0 1em 0 1.5em;
      }
    }
  }

  .pic {
    position: relative;
    overflow: visible;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: sizem(40);
    display: flex;


    @media screen and (min-width: 768px) {
      width: size(1135);
      margin-bottom: 0
    }

    .pic_left {
      width: sizem(130);
      padding-left: sizem(20);


      @media screen and (min-width: 768px) {
        width: size(280);
        padding: 0 0 size(70) 0;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;


      }

      .item {
        position: relative;
        margin-top: sizem(15);

        &:nth-child(1) {
          margin-top: 0 !important;
        }

        @media screen and (min-width: 768px) {
          margin-top: size(35);
        }

        img {
          width: 100%;
        }

        p {
          position: absolute;
          line-height: 1;
          border: 1px solid #3B8281;
          background-color: rgba(204, 204, 204, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;

          width: sizem(18);
          height: sizem(55);
          font-size: sizem(10);
          right: sizem(-12);
          top: sizem(-10);

          @media screen and (min-width: 768px) {
            width: size(36);
            height: size(110);
            font-size: size(20);
            right: size(-25);
            top: size(-15);
          }
        }
      }
    }

    .pic_right {
      width: calc(100% - sizem(140));
      position: relative;

      @media screen and (min-width: 768px) {
        width: size(880);
      }

      .main {
        position: absolute;
        right: sizem(-40);
        bottom: sizem(-40);
        width: sizem(295);

        @media screen and (min-width: 768px) {
          width: 100%;
          position: static;
        }
      }

      .light01 {
        position: absolute;
        width: sizem(30);
        right: sizem(90);
        top: sizem(30);
        mix-blend-mode: screen;
        opacity: 0;
        animation-name: slow-fade;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        @media screen and (min-width: 768px) {
          width: size(50);
          right: size(377.5);
          top: size(325);
        }
      }

      .light02 {
        width: sizem(20);
        right: sizem(200);
        top: sizem(100);
        position: absolute;
        mix-blend-mode: screen;
        opacity: 0;
        animation-name: slow-fade;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        @media screen and (min-width: 768px) {
          width: size(50);
          right: size(670);
          top: size(350);
        }
      }

      p {
        position: absolute;
        line-height: 1;
        border: 1px solid #3B8281;
        background-color: rgba(204, 204, 204, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        width: sizem(25);
        height: sizem(70);
        font-size: sizem(12);
        right: sizem(30);
        top: sizem(-30);

        @media screen and (min-width: 768px) {
          width: size(56);
          height: size(165);
          font-size: size(27);
          right: size(100);
          top: size(125);
        }
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

  @keyframes slow-fade {

    /* 淡出 - 動畫開始時 */
    0% {
      opacity: 0;
    }

    /* 淡入 - 動畫中點時 */
    100% {
      opacity: 1;
    }
  }
}
</style>
