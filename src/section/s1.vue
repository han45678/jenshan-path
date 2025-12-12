<template>
  <article
    class="s1 font-[Amiri,serif,'Noto_Serif_TC']"
    id="s1"
  >
    <div class="txt">
      <img
        class="logo"
        src="./s1/logo.svg"
        alt="logo"
        data-aos="fade-up"
      />
    </div>
    <img
        class="l"
        src="./s1/l.webp"
        alt="logo"
        data-aos="fade-up"
      />

      <img
        class="r"
        src="./s1/r.webp"
        alt="logo"
        data-aos="fade-up"
      />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  height: 100dvh;
  min-height: sizem(604);
  max-height: sizem(812);
  background: url('./s1/bg.webp') center right;
  background-size: cover;
  position: relative;

  @media screen and (min-width: 768px) {
    font-size: size(47);
    min-height: size(950);
    max-height: size(1080);
  }

  .txt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: sizem(325);

    @media screen and (min-width: 768px) {
      padding-right: 0;
      top: size(340);

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

        @media screen and (min-width: 768px) {
          width: size(410);
          top: size(420);
        }
      }
    }
}
</style>
