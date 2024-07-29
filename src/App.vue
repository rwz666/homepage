<template>
  <!-- 加载 -->
  <Loding />
  <!-- 壁纸 -->
  <Background @loadComplete="loadComplete" />
  <!-- 主界面 -->
  <main id="main">
    111
  </main>
  
</template>

<script setup lang="ts">
  import {cursorInit} from '@/utils/cursor'
  import { nextTick, onMounted } from 'vue'
  import Background from '@/components/Background.vue'
  import Loding from '@/components/Loading/Loading.vue'
  import { mainStore } from './store';
  
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

</style>
