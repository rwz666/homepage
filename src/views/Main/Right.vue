<template>
  <div class="right">
    <!-- 展示小功能区域（音乐播放器和时钟） -->
    <Func />

    <!-- 链接区域 -->
  </div>
</template>

<script lang="ts" setup>
import Func from '@/views/Func/index.vue'


</script>

<style lang="scss" scoped>
.right {
  width: 50%;
  margin-left: 20px;

  @media(max-width: 720px) {
    display: none;
  }
}
</style>