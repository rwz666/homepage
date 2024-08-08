<template>
  <div class="message">
    <div class="descriptipn cards">
      <div class="content">
        <div class="text">
          欢迎访问本站点！
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.message {

  .descriptipn {
    padding: 1rem;
    margin-top: 3rem;
    max-width: 500px;

    .content {
      display: flex;
      justify-content: space-between;

      .text {
        // text-align: center;
        text-decoration: none;
        line-height: 2rem;
        ;
        margin: auto;
      }
    }

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }

}
</style>