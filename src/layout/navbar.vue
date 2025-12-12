<template>
    <div class="nav fixed z-[100]" v-bind:class="{ 'r16-9': higherScreen }">
        <!-- <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div> -->
        <div class="menu-btn cursor-pointer flex items-center gap-3" @click="menuOpen = !menuOpen"
            v-bind:class="{ 'open': menuOpen }">
            <!-- <p class="uppercase text-color2 z-10">menu</p> -->
            <div class="bar"></div>
        </div>
        <div class="menu flex items-center justify-center" v-bind:class="{ open: menuOpen }">
            <!-- <div class="logo cursor-pointer z-10" v-bind:class="{ 'open': menuOpen }" @click="scrollTo('.s1')"></div>
            <div class="menu-x-btn" @click="menuOpen = !menuOpen">
                <img src="@/section/menu/x.svg" alt="icon">
            </div> -->
            <template v-for="item,  in info.navList" :key="item">
                <div class="menu-item cursor-pointer text-white font-['noto_sans_tc'] "
                    v-bind:class="{ btn2: item.type }"
                    @click="scrollTo(item.target, $isMobile() ? item.offsetmo ? item.offsetmo : item.offset : item.offset)"
                    v-if="!(item.name === '地圖導航' && !info.address) && !(item.name === '立即來電' && !info.phone)">
                    <span class="font-['Noto_Serif_TC',serif]">{{ item.name }}</span>
                </div>
            </template>
            <div class="close" @click="menuOpen = !menuOpen" v-if="$isMobile()">
            </div>
        </div>
    </div>
    <div class="gotop fixed z-[98] cursor-pointer" v-bind:class="{ show: scrollPos > 100 }" @click="scrollTo('.s1')">
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.nav {
    right: sizem(15);
    top: sizem(15);

    @media screen and (min-width: 768px) {
        right: size(15);
        top: size(15);
    }

    .logo {
        width: size(145);
        height: size(50);
        position: absolute;
        left: 1em;
    }

    .menu-btn {
        background-color: transparent;
        height: size(40);
        width: size(41.43);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;

        p {
            transition: all .5s;
            font-size: size(20);
        }

        .bar {
            width: size(30);
            height: 3px;
            background-color: currentColor;
            position: relative;
            transition: all .5s;
            color: #fff;
            box-shadow: 0 3px 0 #0366;

            &::after {
                content: '';
                width: 100%;
                height: 3px;
                bottom: -#{size(10)};
                position: absolute;
                background-color: currentColor;
                box-shadow: 0 3px 0 #0366;
                //transform: translateX(-10%);
            }

            &::before {
                content: '';
                width: 100%;
                height: 3px;
                top: -#{size(10)};
                position: absolute;
                background-color: currentColor;
                box-shadow: 0 3px 0 #0366;
                //transform: translateX(-10%);
            }
        }

        &:hover {

            .bar {
                transform: scaleX(1.2);
            }
        }

        &.open {
            transition: all .5s;
            background-color: transparent;
            width: 0;

            &::after {
                content: '';
                background-color: transparent;
                box-shadow: unset;
                width: 0%;
            }

            p {
                color: #fff;
            }
        }
    }

    .menu {
        position: fixed;
        flex-direction: row;
        top: 0;
        right: 0;
        // background: #032763cc;
        width: size(485);
        height: 100dvh;
        z-index: 5;
        font-weight: 700;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        align-content: center;
        background-image: url('@/section/menu/bg.png');
       // background-color: #fff;
        background-size: cover;
        background-position: bottom right;
        transform: translateX(100%);
        transition: 0.3s;
        border-left: 1px solid #C9BC9C80;
        box-shadow: -4px 0 20px 0 rgba(0, 0, 0, 0.60);
        backdrop-filter: blur(2px);
        @media screen and (max-width: 767px) {
            width: 100%;
        }

        .menu-x-btn{
            position: absolute;
            top: 0%;
            right: 0%;
            cursor: pointer;
        }
        .menu-item {
            position: relative;
            display: block;
            width: 100%;
            text-align: center;

            img {
                width: size(43);
            }

            font-size: size(30);
            line-height: 3;

            @media screen and (max-width: 767px) {
                font-size: sizem(25);
                line-height: 2;
            }

            span{
                position: relative;
                z-index: 1;
            }

            &:after {
                content: '';
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: size(25);
                width: 0;
                height: size(12);
                background-color: #C9BC9C;
                transition: all .35s;
                opacity: 0.6;
                @media screen and (max-width: 767px) {
                    width:0;
                    height: sizem(12);
                    bottom: sizem(10);
                }
            }

            &:hover {

                &:after {
                    width: size(130);
                @media screen and (max-width: 767px) {
                    width: sizem(130);
                }
                }
            }

            &.btn2 {
                background: #EF8200;
                ;
                border-radius: 2em;
                margin-right: -1em;
                padding: .7em 1.5em;

                &:hover {
                    background: #df6400;

                    &:after {
                        width: 0;
                    }
                }
            }

        }

        &.open {
            transform: translateX(0);
        }

        .close {
            position: absolute;
            top: size(77);
            left: 50%;
            transform: translateX(-50%);
            width: size(44);
            height: size(44);
            cursor: pointer;

            img {
                width: 100%;
            }
        }

        .decor {
            position: absolute;
            width: size(330);
            top: -#{size(170)};
            left: size(22);
            z-index: 1;
            animation: rotate 10s infinite linear;

            @keyframes rotate {
                from {
                    transform: rotate(0deg);
                }

                to {
                    transform: rotate(360deg);
                }
            }
        }

    }
}

.gotop {
    width: size(49.4);
    height: size(49.4);
    right: size(20);
    bottom: size(50);
    background-image: url('@/assets/top.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    transform: translateY(200%);
    transition: all .5s;

    &.show {
        transform: translateY(0%);
    }
}

@media screen and (max-width:768px) {

    .gotop {
        width: sizem(34.24);
        height: sizem(34.24);
        right: sizem(20);
        bottom: sizem(80);
    }

    .nav {
        // width: sizem(350);
        right: 0;
        top: 0;
        // padding: 0 sizem(8);
        height: auto;
        border-radius: 9999px;

        .logo {
            width: sizem(80);
            height: sizem(42);
            transition: all .2s;
            top: sizem(13);
            left: sizem(10);

            &.open {
                //  filter: brightness(0) invert(1);
            }
        }

        .menu-btn {
            width: sizem(40);
            height: sizem(40);
            padding: 0;
            font-size: sizem(20);
            margin: sizem(10);

            p {
                font-size: sizem(14);
                font-weight: 100;
            }

            .bar {
                width: sizem(32);

                &::after {
                    bottom: -#{sizem(10)};
                }

                &::before {
                    top: -#{sizem(10)};
                }
            }

            &.open {
                display: none;

                p {
                    color: #fff;
                }

                .bar {
                    height: 0;

                    &::after {
                        content: '';
                        width: 100%;
                        height: 2px;
                        bottom: 50%;
                        margin-bottom: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(135deg);
                    }

                    &::before {
                        content: '';
                        width: 100%;
                        height: 2px;
                        top: 50%;
                        margin-top: -1px;
                        position: absolute;
                        background-color: #fff;
                        transition: all .5s;
                        transform: rotate(-135deg);
                    }
                }
            }
        }

        .menu {
            height: 100%;
            //  z-index: 0;
            transform: translateX(150%);
            transition: all .5s;
            // padding: 0;
            font-size: sizem(18);
            gap: sizem(23);
            justify-content: center;
            flex-direction: column;
            padding: 0;
            background-image: url('@/section/menu/bg.png');

            .menu-item {

                img {
                    width: sizem(30);
                }

                &.btn2 {
                    margin: 0 auto -.5em auto;
                    padding: 0.4em 4em;
                }

            }

            &.open {
                transform: translateX(0);
                left: unset;
            }

            .decor {
                width: 30vh;
                left: 50%;
                margin-left: -15vh;
                top: -15vh;
                animation: rotate 10s infinite linear;
            }

            .close {
                position: absolute;
                left: unset;
                bottom: 0;
                transform: translateX(0);
                top: sizem(10);
                right: sizem(10);
                width: sizem(44);
                height: sizem(44);
                cursor: pointer;
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                &::before,
                &::after {
                    content: "";
                    background: #FFF;
                    height: 3px;
                    width: 100%;
                    display: block;
                }

                &::before {
                    transform: rotate(45deg);
                    margin-bottom: -2px;
                }

                &::after {
                    transform: rotate(-45deg);
                }
            }
        }
    }
}
</style>

<script setup>
import { inject, computed, getCurrentInstance, onMounted, ref } from 'vue';
import info from "@/info"

const menuOpen = ref(false)

const globals = getCurrentInstance().appContext.config.globalProperties
const isMobile = computed(() => globals.$isMobile())

const higherScreen = ref(true)

const scrollPos = ref(0)

onMounted(() => {
    const ratio = window.innerHeight / window.innerWidth

    // if (!globals.$isMobile() && ratio > 0.46875) {
    //     higherScreen.value = true
    // }

    window.addEventListener('scroll', (event) => {
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        scrollPos.value = scroll
    });
})


const smoothScroll = inject('smoothScroll')
const scrollTo = (el, offset) => {
    const targetElement = document.querySelector(el);
    if (targetElement) {
        const numericOffset = parseInt(offset) ? parseInt(offset) : 0;
        const elementRect = targetElement.getBoundingClientRect();
        const topPosition = window.pageYOffset + elementRect.top + numericOffset;

        smoothScroll({
            scrollTo: topPosition
        });
    }
    menuOpen.value = false;
}
</script>