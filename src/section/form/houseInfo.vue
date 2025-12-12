<template>
    <div class="house" v-if="info.houseInfos.length > 0">


        <div class="txt">
            <img class="logo" src="@/section/s1/logo.svg" alt="logo">
            <img class="t1" src="@/section/info/t1.svg" alt="text">

            <img class="t2" src="@/section/info/pic.png" alt="text">
            <img class="t3" src="@/section/s1/t1.svg" alt="text">
            <img class="t4" src="@/section/s1/t2.svg" alt="text">
        </div>
        <div class="right">
            <img class="bg" src="@/section/s1/right.webp" alt="right">
            <div class="bird">
                <img src="@/section/s1/bird.webp" alt="bird" data-aos="fade-left">
            </div>
        </div>

        <div class="info">
            <ul>
                <li v-for="item in info.houseInfos" :key="item">
                    <p class="font-['Noto_Serif_TC',serif] text-[#fff]" v-html="item[0]"></p>
                    <p class="font-['Noto_Serif_TC',serif] text-[#fff]" v-html="item[1]"></p>
                </li>
            </ul>
        </div>
    </div>

    <div class="footer flex items-center justify-center w-full h-[40px] bg-[#302626]">
        <a href="https://www.lixin.com.tw/" target="_blank"><img class="hover:opacity-50"
                src="//h35.banner.tw/img//footerLogo.gif" alt="立炘數位" srcset=""></a>
        <a href="https://www.h65.tw/admin/test/login" target="_blank" class="text-white text-xs">網頁製作</a>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

$house-c1: #32B8C3;
$house-c2: #000;

.displaynone {
    display: none;
}

.house {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: sizem(920);
    background: url("@/section/s1/bg.jpg") center;
    background-size: cover;
    position: relative;

    @media screen and (min-width: 768px) {
        height: 100dvh;
    }

    .txt {
        position: absolute;
        padding-right: sizem(160);
        top: sizem(40);

        @media screen and (min-width: 768px) {
            padding-right: 0;
            top: size(150);
            left: size(270);
            margin: auto;
        }

        img {
            display: block;
            max-width: 100%;

            &.logo {
                width: sizem(125);

                @media screen and (min-width: 768px) {
                    width: size(300);
                }
            }

            &.t1 {
                margin-top: sizem(50);
                width: sizem(90);

                @media screen and (min-width: 768px) {
                    margin-top: size(100);
                    width: size(205);
                }
            }

            &.t2 {
                margin-top: sizem(25);
                width: sizem(7);

                @media screen and (min-width: 768px) {
                    margin-top: size(45);
                    width: size(17);
                }
            }

            &.t3 {
                margin-top: sizem(20);
                width: sizem(120);

                @media screen and (min-width: 768px) {
                    margin-top: size(65);
                    width: size(215);
                }
            }

            &.t4 {
                margin-top: sizem(10);
                width: sizem(100);

                @media screen and (min-width: 768px) {
                    margin-top: size(30);
                    width: size(215);
                }
            }
        }
    }

    .right {
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;

        .bg {
            width: auto;
            height: sizem(668);
            margin-top: sizem(-180);

            @media screen and (min-width: 768px) {
                
            height: 100%;
            margin-top: 0;
            }
        }

        .bird {
            width: 100%;
            position: absolute;
            width: sizem(120);
            top: sizem(95);
      overflow: hidden;
            right: 18%;

            @media screen and (min-width: 768px) {
                width: size(240);
                top: size(360);
            }

            img {
                width: 100%;
            }
        }
    }

    .info {
        position: absolute;
        top: 140vw;

        //  height: 50dvh;
        @media screen and (min-width: 768px) {
            right: size(450);
            top: size(125);
            height: auto;
        }

        ul {
            li {
                text-align: left;
                display: flex;
                align-items: center;

                p {
                    line-height: 2.25;

                    &:nth-child(1) {
                        font-weight: 600;
                        font-size: sizem(12);

                        @media screen and (min-width: 768px) {
                            font-size: size(22);
                        }

                        &::after {
                            content: '/';
                            display: inline-block;
                            margin-right: sizem(10);
                            margin-left: sizem(5);

                            @media screen and (min-width: 768px) {
                                margin-right: size(10);
                                margin-left: size(5);
                            }
                        }
                    }

                    &:nth-child(2) {
                        font-weight: 600;
                        font-size: sizem(16);

                        @media screen and (min-width: 768px) {
                            font-size: size(30);
                        }
                    }
                }
            }
        }
    }
}

.info-box {
    width: size(800);

    .title {
        font-size: size(40);
        font-weight: 700;
        color: $house-c1;
        margin: 0 auto 1em auto;
    }

    .info-items {
        row-gap: size(20);
        column-gap: size(20);

        .item {
            line-height: size(17);
            font-size: size(16);
            align-items: flex-start;
            line-height: 1.5;
            text-align: left;
            border-left: 2px solid $house-c1;

            .sub {
                color: $house-c1;
                // min-width: 4.5em;
            }
        }
    }
}

@media screen and (max-width:768px) {
    .house {
        // background:#fff;
        //  height: sizem(400);
        font-size: sizem(13);
    }

    .footer {
        margin-bottom: sizem(0);
        //margin-bottom: sizem(63);
    }

    .info-box {
        width: sizem(313);
        padding: 0;

        .title {
            font-size: sizem(29);
            width: auto;
        }

        .info-items {
            row-gap: sizem(20);

            .item {
                font-size: sizem(13);
            }
        }
    }

}
</style>

<script setup>
import info from "@/info"


</script>