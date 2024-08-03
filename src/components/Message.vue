<template>
    <div class="message">
        <div class="descriptipn cards">
          <div class="content">
            <div class="text">
              这里要放置一段话，通过变量渲染，会自动换行。111111发分厘卡撒酒疯
            </div>
          </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>

  .message{
    
    .descriptipn{
      padding: 1rem;
      margin-top: 3rem;
      max-width: 500px;
      .content {
        display: flex;
        justify-content: space-between;

        .text {
          // text-align: center;
          text-decoration: none;
          line-height: 2rem;;
          margin: auto;
        }
      }
      @media (max-width: 800px){
        max-width: 100%;
      }
    }
    
  }
</style>