<template>
  <div class="hitokoo cards">
    <!-- 一言内容 -->
    <div class="content">
      <div class="text">你若安好便是晴天</div>
      <div class="author">—「&nbsp;林清玄&nbsp;」</div>
    </div>
  </div>
</template>


<script lang="ts" setup>

</script>


<style lang="scss" scoped>
.hitokoo {
  width: 100%;
  height: 100%;
  padding: 20px;

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .text {
      font-size: 1.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      line-clamp: 3;
    }

    .author {
      font-size: 1rem;
      align-self: flex-end;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>