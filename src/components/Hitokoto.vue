<template>
  <div class="hitokoo cards">
    <!-- 一言内容 -->
    <div class="content" @click="updateHitokoto">
      <div class="text">{{ msg.hitokoto }}</div>
      <div class="author">—「&nbsp;{{ msg.from }}&nbsp;」</div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { getHitokoto, getOtherHitokoto } from '@/api';
import { ElMessage } from 'element-plus';
import { onMounted, reactive, ref } from 'vue';
import debounce from '@/utils/debounce'

onMounted(() => {
  getMessage()
})

const msg = reactive({
  hitokoto: '你若安好便是晴天',
  from: '林清玄'
})
// 获取一言数据
async function getMessage() {
  let f = getMessage1()
  // console.log(f)
  if (!f) getMessage2()

}
const updateHitokoto = () => {
  // 防抖
  debounce(() => {
    getMessage()
  }, 500)
}
// 调用api获取一言
function getMessage1() {
  getHitokoto().then(result => {
    Object.assign(msg, result)
    return true
  }).catch(e => {
    console.log('一言接口1获取失败', e)
  })
  return false
}
function getMessage2() {
  getOtherHitokoto().then(result => {
    let data = result.data
    msg.hitokoto = data.hitokoto
    msg.from = (data.source != '' ? data.source : '网络')
    // console.log(msg)
    // console.log(data)
  }).catch(e => {
    console.log('一言接口2获取失败,', e)
    msg.hitokoto = '你若安好便是晴天'
    msg.from = '林清玄'
  })

}


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