<template>
  <article class="s10">
    <img class="img" src="./s10/img.svg" alt="img" />
    <div class="txt font-['Noto_Serif_TC',serif]">
      <h2>
        <span data-aos="fade-up">安享品味 嚴選國際建材</span>
      </h2>
      <img class="line" src="./s3/line.svg" alt="line">
      <p>
        <span data-aos="fade-up">佳展建設精心打造十年里程碑代表作，精挑細選頂尖建材與配備，以精品工藝，開啟品味質感的每一天。</span>
      </p>
    </div>
    <div class="pic">
      <img src="./s10/pic.png" alt="pic" />
    </div>
  </article>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s10 {
  display: flex;
  flex-wrap: wrap;
  background-color: #E6E6E6;
  position: relative;
  /*
  background: url("./s10/10m.jpg");
  background-size: 100% auto;
  */

  @media screen and (min-width: 768px) {
    justify-content: center;
    align-items: end;
    gap: 0;
    padding: size(270) size(330) size(260) size(60);
  }
  .img{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  @media screen and (max-width: 767px) {
    height: 100vw;
transform-origin: 100% 0;
transform: rotate(-90deg) translateY(-100%);
  }
  }

  .txt {
    padding: sizem(150) sizem(40) sizem(100);
    width: 100%;
    box-sizing: border-box;

    @media screen and (min-width: 768px) {
      padding: 0 0 0 size(15);
      width: size(460);
      order: 2;
    }

    h2 {
      position: relative;

      &::before {
        content: '';
        background-image: url(./s3/title_line_m.svg);
        background-size: sizem(290);
        background-repeat: no-repeat;
        background-position: 0 0;
        width: 100%;
        height: 100%;

        @media screen and (min-width: 768px) {
          background-image: url(./s8/title_line.svg);
          background-size: size(450) auto;
        background-position: 0 0;
        }

        position: absolute;
        top: 0;
        left: 0;
      }

      font-size: sizem(20);
      padding-top: sizem(50);
      padding-left: sizem(16);

      @media screen and (min-width: 768px) {
        padding-top: size(195);
        padding-left: size(30);
        font-size: size(36);
        margin-bottom: size(20);
      }
    }

    .line {
      display: block;
      margin-left: sizem(100);
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
        padding: 0 5.5em 0 1.5em;

      @media screen and (min-width: 768px) {
        font-size: size(18);
        padding: 0 2.5em 0 1.5em;
      }
    }
  }

  .pic {
    position: relative;
    overflow: visible;
    width: calc(100% - sizem(80));
    margin-left: auto;
    margin-right: auto;
    margin-bottom: sizem(45);


    @media screen and (min-width: 768px) {
      width: size(725);
      order: 1;
      margin-bottom: 0
    }

    img {
      width: 100%;
    }

  }
}
</style>
