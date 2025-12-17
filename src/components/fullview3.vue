<template>
  <div class="modal-mask" @click.self="$emit('close')">
    <div class="modal-content">
      <button class="close" @click="$emit('close')">✕</button>

    <div class="viewbox2" ref="viewbox" :class="{ ready: ready }">
        <img ref="viewImg" src="@/section/s6/map.jpg" alt="" srcset="">
        <div class="mask" v-bind:class="{ hide: swiped }" v-if="$isMobile()">
            <img src="@/components/fullview/finger.png" alt="" srcset="">
        </div>
    </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  max-width: 100%;
  height: calc(100dvh - 80px);
}

.modal-content img {
  max-width: 100%;
  max-height: 100%;
}

.close {
  position: absolute;
  top: -40px;
  right: 10px;
  color: #fff;
  font-size: 24px;
}

.viewbox2 {
    position: relative;
    width: 100%;
    height: 100%;
    background: #eee;

    img {
        height: 100%;
        max-width: unset;
    }

}

@media screen and (max-width: 767px) {
    .viewbox2 {
        position: relative;
        height:100%;
        overflow: hidden;

        img {
            height: 100%;
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
            align-items: center;
            pointer-events: none;
            opacity: 1;
            transition: all 1s;
            background-color: rgba($color: #000000, $alpha: 0.5);

            img {
                height: 47px;
            }

            &.hide {
                opacity: 0;
            }
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
const offsetRatio = 2.85; //調整此值設定X軸位置偏移參數
const ready = ref(false)

onMounted(() => {
  viewImg.value.addEventListener('load', () => {
    const scroll = new BScroll(viewbox.value, {
      probeType: 2,
      scrollX: true,
      scrollY: true,
      eventPassthrough: 'vertical',
      bounce: false,
    })

    scroll.refresh()
    scroll.scrollTo(scroll.maxScrollX / offsetRatio, 0)

    ready.value = true

    scroll.on('scroll', () => {
      swiped.value = true
    })
  })
})


</script>