<template>
  <article class="s1 font-[Amiri,serif,'Noto_Serif_TC']" id="s1">
    <div class="txt">
      <img class="logo" src="./s1/logo.svg" alt="logo" />
    </div>
    <img class="l" src="./s1/l.webp" alt="logo" data-aos="fade" data-aos-delay="200" />

    <img class="r" src="./s1/r.webp" alt="logo" data-aos="fade" data-aos-delay="200" />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 // height: 100vh;
  height: calc(100dvh - sizem(63));
  min-height: sizem(604);
  max-height: sizem(812);
  // background: url('./s1/bgm.jpg') center top;
  // background-size: cover;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: size(47);
  height: 100dvh;
    min-height: size(950);
    max-height: size(1080);
   // background-image: url('./s1/bg.jpg');
  }

  .txt {
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
      width: sizem(300);z-index: 3;

    @media screen and (min-width: 768px) {
      padding-right: 0;
        width: size(640);

      margin: auto;
    }


  }

  img {
    display: block;
    max-width: 100%;

    &.logo {
      width: sizem(300);
      @media screen and (min-width: 768px) {
        width: size(640);
      }
    }

    &.l {
      width: sizem(160);
      position: absolute;
      left: 0;
      top: sizem(215);
        top: calc(50% + sizem(215 - 800 * 0.5));

      @media screen and (min-width: 768px) {
        width: size(440);
        top: size(145);
      }
    }

    &.r {
      width: sizem(160);
      position: absolute;
      right: 0;
      top: sizem(450);
        top: calc(50% + sizem(450 - 800 * 0.5));

      @media screen and (min-width: 768px) {
        width: size(410);
        top: size(420);
      }
    }
  }
}
</style>
