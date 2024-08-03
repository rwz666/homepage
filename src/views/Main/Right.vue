<template>
 <div class="right">
  右半部分
 </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
  .right {
    width: 50%;
    background-color: red;
    margin-left: 20px;

    @media(max-width: 720px){
      display: none;
    }
  }
</style>