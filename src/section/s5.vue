<template>
  <article class="s5">
    <div class="text">
      <h3 class="font-['Gill Sans',serif]"><span>Elegant Presence</span></h3>
      <h2 class="font-['Noto_Serif_TC',serif]">鋼骨榮光 靜距百米</h2>
      <p class="font-['Noto_Serif_TC',serif]">
        26層SRC鋼骨制震建築，為居住安全立下不變的誓言。<br />
        百米棟距之間，納入四季天光，<br />
        為每一戶預留充足光影與隱私。<br class="block md:hidden" />
        以一層兩戶的純粹規劃，成就少數人的靜謐高度。<br />
        這不只是建築，更是一種穩定而優雅的存在。
      </p>
    </div>
    <img
      class="decorate"
      src="./s5/decorate.png"
      alt="decorate"
    />

    <div class="t">
      <img
        src="./s5/t1.png"
        alt="t"
      />
    </div>

    <img
      class="b"
      src="./s5/b.png"
      alt="b"
    />
  </article>
</template>

<style lang="scss" scoped>
@import '@/assets/style/function.scss';

.s5 {
  position: relative;
  height: sizem(950);
  @media screen and (min-width: 768px) {
    height: size(1220);
  }
  .decorate {
    position: absolute;
    width: sizem(120);
    top: sizem(130);
    @media screen and (min-width: 768px) {
      width: size(350);
      top: 0;
      left: 0;
      z-index: 0;
    }
  }
  .t {
    position: absolute;
    width: sizem(170);
    bottom: sizem(400);
    right: sizem(45);
    @media screen and (min-width: 768px) {
      width: size(415);
      right: size(410);
      bottom: size(90);
    }
    img {
      width: 100%;
    }
  }
  .b {
    position: absolute;
    right: sizem(-125);
    width: 800px;
    bottom: sizem(325);
    @media screen and (min-width: 768px) {
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .text {
    position: absolute;
    left: 0;
    top: sizem(665);
    width: 100%;
    color: #fff;
    text-align: right;
    padding-right: sizem(15);
    @media screen and (min-width: 768px) {
      top: size(415);
      width: size(970);
    }
    h3 {
      font-weight: 400;
      color: #b8984a;
      text-shadow: 0 0 sizem(5.625) rgba(0, 0, 0, 0.65);
      font-size: sizem(16.875);
      display: flex;
      align-items: center;
      justify-content: space-between;
      &::before {
        content: '';
        display: inline-block;
        width: calc(100% - sizem(150));
        height: sizem(2);
        background-color: #b8984a;
        @media screen and (min-width: 768px) {
          width: calc(100% - size(265));
          height: size(2);
        }
      }
      @media screen and (min-width: 768px) {
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.65);
        font-size: size(30);
      }
    }
    h2 {
      color: #fff;
      font-weight: 700;
      text-shadow: 0 0 sizem(10) rgba(0, 0, 0, 0.65);
      font-size: sizem(28);
      padding-top: sizem(15);
      padding-bottom: sizem(20);
      @media screen and (min-width: 768px) {
        text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
        font-size: size(38);
        padding-top: size(20);
        padding-bottom: size(20);
      }
    }
    p {
      color: #fff;
      font-weight: 500;
      padding-left: sizem(15);
      text-shadow: 0 0 sizem(10) rgba(0, 0, 0, 0.65);
      font-size: sizem(14);
      line-height: sizem(30);
      @media screen and (min-width: 768px) {
        text-shadow: 0 0 size(10) rgba(0, 0, 0, 0.65);
        padding-left: 0;
        font-size: size(18);
        line-height: size(34);
      }
    }
  }
}
</style>
