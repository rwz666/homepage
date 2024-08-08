<template>
  <div class="right">
    <!-- 展示小功能区域（音乐播放器和时钟） -->
    <Func />

    <!-- 更多内容区域 -->
    <Links />

  </div>
</template>

<script lang="ts" setup>
import Func from '@/views/Func/index.vue'
import Links from '@/components/Links.vue'


</script>

<style lang="scss" scoped>
.right {
  width: 50%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 720px) {
    display: none;
  }
}
</style>