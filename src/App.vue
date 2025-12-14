<template>
  <!-- 加载 -->
  <Loding />
  <!-- 壁纸 -->
  <Background @loadComplete="loadComplete" />
  <!-- 导航栏 -->
  <!-- <div class="header">
    <Header />
  </div> -->
  <!-- 主界面 -->
  <main id="main" v-if="store.imgLoadStatus">

    <div class="container" v-show="!store.backgroundShow">
      <Home />
    </div>
  </main>

</template>

<script setup lang="ts">
import { cursorInit } from '@/utils/cursor'
import { nextTick, onMounted } from 'vue'
import Background from '@/components/Background.vue'
import Header from '@/components/Header/index.vue'
import Home from '@/views/Home.vue'

/* 两种加载动画 */
import Loding from '@/components/Loading/LoadingRotateCircle.vue'
// import Loding from '@/components/Loading/Loading.vue'
import { mainStore } from './store';


const store = mainStore()
// 关在完成事件
onMounted(() => {
  //自定义鼠标
  cursorInit()
})
// 加载完成事件
function loadComplete() {
  nextTick(() => {
    console.log('App.vue加载完成事件')
  })
}
// 添加鼠标中键点击事件
window.addEventListener('mousedown', function (event) {
  // 检查是否是鼠标中键点击事件
  if (event.button === 1) {
    store.backgroundShow = !store.backgroundShow
  }
});

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}

#main {
  display: flex;
  align-items: center;
  height: 100vh;
}

.container {
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
  max-width: 1200px;
  margin: auto;
  display: flex;
  // align-items: center;

}
</style>
