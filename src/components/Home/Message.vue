<template>
  <div class="message">
    <!-- LOGO -->
    <div class="logo">
      <img class="logo-img" :src="siteLogo" alt="logo" />
      <div :class="{ name: true, 'text-hidden': true, long: siteUrl[0].length >= 6 }">
        <span class="bg">{{ siteUrl[0] }}</span>
        <span class="sm">.{{ siteUrl[1] }}</span>
      </div>
    </div>

    <!-- 简介 -->
    <div class="descriptipn cards" @click="changeBoxOrMessage">
      <div class="content">
        <Transition name="fade" mode="out-in">
          <div :key="descriptionText.hello + descriptionText.text" class="text">
            <p>{{ descriptionText.hello }}</p>
            <p>{{ descriptionText.text }}</p>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { mainStore } from '@/store';

const store = mainStore()

// 主页站点logo
const siteLogo = import.meta.env.VITE_SITE_MAIN_LOGO;
// 站点链接
const siteUrl = computed(() => {
  const url = import.meta.env.VITE_SITE_URL;
  if (!url) return "rwz.top".split(".");
  // 判断协议前缀
  if (url.startsWith("http://") || url.startsWith("https://")) {
    const urlFormat = url.replace(/^(https?:\/\/)/, "");
    return urlFormat.split(".");
  }
  return url.split(".");
});

// 简介区域文字
const descriptionText = reactive({
  hello: import.meta.env.VITE_DESC_HELLO,
  text: import.meta.env.VITE_DESC_TEXT,
});


const changeBoxOrMessage = () => {
  store.boxOpenState = !store.boxOpenState
  console.log('切换盒子展示状态', store.boxOpenState)
}

// 监听状态变化
watch(
  () => store.boxOpenState,
  (value) => {
    if (value) {
      descriptionText.hello = import.meta.env.VITE_DESC_HELLO_OTHER;
      descriptionText.text = import.meta.env.VITE_DESC_TEXT_OTHER;
    } else {
      descriptionText.hello = import.meta.env.VITE_DESC_HELLO;
      descriptionText.text = import.meta.env.VITE_DESC_TEXT;
    }
  },
);
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  flex-direction: column;

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    animation: fade 0.5s;
    max-width: 460px;

    .logo-img {
      border-radius: 50%;
      width: 120px;
    }

    .name {
      width: 100%;
      padding-left: 22px;
      transform: translateY(8px);
      font-family: "AnakCute";

      .bg {
        font-size: 8rem;
      }

      .sm {
        margin-left: 6px;
        font-size: 4rem;

        @media (min-width: 720px) and (max-width: 789px) {
          display: none;
        }
      }
    }

    @media (max-width: 768px) {
      .logo-img {
        width: 100px;
      }

      .name {
        height: 128px;

        .bg {
          font-size: 4.5rem;
        }
      }
    }

    @media (max-width: 720px) {
      max-width: 100%;
    }
  }

  .descriptipn {
    padding: 1rem;
    margin-top: 3rem;
    max-width: 500px;

    .content {
      display: flex;
      justify-content: space-between;

      .text {
        margin: 0.75rem 1rem;
        line-height: 2rem;
        margin-right: auto;
        transition: opacity 0.2s;

        p {
          &:nth-of-type(1) {
            font-family: "AnakCute";
          }
        }
      }

      .xicon:nth-of-type(2) {
        align-self: flex-end;
      }
    }

    @media (max-width: 800px) {
      max-width: 100%;
      pointer-events: none;
    }
  }

  @media (max-width: 390px) {
    .logo {
      flex-direction: column;

      .logo-img {
        display: none;
      }

      .name {
        margin-left: 0;
        height: auto;
        transform: none;
        text-align: center;

        .bg {
          font-size: 3.5rem;
        }

        .sm {
          font-size: 1.4rem;
        }
      }
    }

    .description {
      margin-top: 2.5rem;
    }
  }

}
</style>