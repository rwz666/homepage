<template>
  <!-- 加载 -->
  <Loding />
  <!-- 壁纸 -->
  <Background @loadComplete="loadComplete" />
  <!-- 主界面 -->
  <main id="main">
    <div class="container">
      <div class="all">
        <MainLeft />
        <MainRight />
      </div>
    </div>
  </main>
  
</template>

<script setup lang="ts">
  import {cursorInit} from '@/utils/cursor'
  import { nextTick, onMounted } from 'vue'
  import Background from '@/components/Background.vue'
  import Loding from '@/components/Loading/Loading.vue'
  import { mainStore } from './store';
  import MainLeft  from '@/views/Main/Left.vue';
  import MainRight from '@/views/Main/Right.vue';
  
  
  const store = mainStore()

  // 关在完成事件
  onMounted(()=>{
    //自定义鼠标
    cursorInit()
  })
  // 加载完成事件
  function loadComplete(){
    nextTick(()=>{
      console.log('App.vue加载完成事件')
    })
  }
    // 添加鼠标中键点击事件
  window.addEventListener('mousedown', function(event) {
      // 检查是否是鼠标中键点击事件
      if (event.button === 1) {
        store.backgroundShow = !store.backgroundShow
          console.log(`已${store.backgroundShow} ? '开启' : '关闭'壁纸展示模式`);
      }
  });

</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100vh;
    padding: 0 1rem;
    .all {
      width: 100%;
      height: 100%;
      padding: 0 1rem;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
</style>
