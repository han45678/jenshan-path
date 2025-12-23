<template>
    <div class="viewbox0" ref="viewbox">
        <img ref="viewImg" src="@/section/s2/bgm.webp" class="viewboxmap" alt="" srcset="">
        <div class="mask" :class="{ hide: swiped }">
            <img src="@/components/fullview/finger.png" alt="" srcset="">
        </div>
    </div>
</template>


<style lang="scss">
@import "@/assets/style/function.scss";

.viewbox0 {
    position: relative;
    width: 100%;
    height: 100%;
    background: #eee;

    img {
        height: 100%;
        max-width: unset;

    }

    .viewboxmap {
        //   background-image: url("@/section/s3/map.jpg");
        background-size: cover;

    }

    .mask {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        pointer-events: none;
        opacity: 1;
        transition: all 1s;
        //   background-color: rgba(#3B8281, 0.4);
        background: linear-gradient(181deg, rgba(75, 122, 214, 0.00) 68.55%, rgba(5, 121, 207, 0.60) 80.31%);

        img {
            height: 47px;margin-bottom: 6em;

        }

        &.hide {
            opacity: 0;
        }
    }
}
</style>

<script setup>
import BScroll from '@better-scroll/core'
import { onMounted, ref } from 'vue';

const viewbox = ref()
const viewImg = ref()
const swiped = ref(false)
const offsetRatio = 1.555;

onMounted(() => {
    viewImg.value.addEventListener('load', () => {

        let scroll = new BScroll(viewbox.value, {
            probeType: 2,
            scrollX: true,
            scrollY: true,
            disableTouch: false,
            disableMouse: false,
            bindToWrapper: true,
            eventPassthrough: "vertical",
            bounce: false,
        })

        scroll.scrollTo(scroll.maxScrollX / offsetRatio, 500);

        setTimeout(() => {
            scroll.on("scroll", () => {
                swiped.value = true;
            });
        }, 1000);
    });
});
</script>
