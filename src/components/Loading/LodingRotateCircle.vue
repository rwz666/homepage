<template>
  <div id="loader-wrapper">
    <div class="loader">
    <div class="face face1">
      <div class="circle">
      </div>
    </div>

    <div class="face face2">
      <div class="circle">
      </div>
    </div>
  </div>
  </div>
</template>


<script lang="ts" setup>

</script>


<style lang="scss" scoped>
#loader-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  overflow: hidden;
  background: #0c0b0b;
}
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  background-color: #000;

  .face {
    position: absolute;
    border: 2px solid #121212;

    .circle{
      position: absolute;
      top: calc(50% - 1px);
      left: 50%;
      width: 50%;
      height: 2px;
      // background-color: #fff;
      transform-origin: left;

      &::before{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #fff;
        top: -4px;
        right: -6px;
      }
    }
    
  }

  .face1 {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #090909;
    border-radius: 50%;
    border-left: 2px solid #ffff00;
    border-top: 2px solid #ffff00;
    animation: animate 3s linear infinite;
    .circle {
      transform: rotate(-45deg);

      &::before{
        content: '';
        position: absolute;
        background-color: #ffff00;
        box-shadow: 0 0 20px #ff0,
                    0 0 40px #ff0,
                    0 0 60px #ff0,
                    0 0 80px #ff0,
                    0 0 100px #ff0,
                    0 0 0 5px rgba(255,255,0,.1);
      }
    }
  }

  .face2 {
    top: 30px;
    left: 30px;
    right: 30px;
    bottom: 30px;
    background: #090909;
    border-radius: 50%;
    border-right: 2px solid #03a9f4;
    border-bottom: 2px solid #03a9f4;
    animation: animate 3s linear reverse infinite;
    .circle{
      transform: rotate(-45deg);
      &::before{
        background-color: #03a9f4;
        box-shadow: 0 0 20px #03a9f4,
                    0 0 40px #03a9f4,
                    0 0 60px #03a9f4,
                    0 0 80px #03a9f4,
                    0 0 100px #03a9f4,
                    0 0 0 5px rgba(3,169,244,.1);
      }
    }
  }
  
}
@keyframes animate{
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>