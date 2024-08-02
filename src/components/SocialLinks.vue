<template>
  <div class="socialLinks">
    <div class="link">
      <a
        v-for="item in socialLinks"
        :key="item.name"
        :href="item.link"
        target="_blank"
        >
          <img :src="item.icon" :alt="item.name" height="24">
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const socialLinks = [
    {
      "icon": "/public/images/icon/github.png",
      "name": 'github',
      "link": 'https://github.com'
    },
    {
      "icon": "/public/images/icon/gitee.png",
      "name": 'gitee',
      "link": 'https://gitee.com'
    },
    {
      "icon": "/public/images/icon/qq.png",
      "name": 'qq',
      "link": 'tencent://message/?uin=3116419886'
    },
    {
      "icon": "/public/images/icon/wechat.png",
      "name": 'wechat',
      "link": 'weixin://contacts/profile/18438328537'
    },
    {
      "icon": "/public/images/icon/bilibili.png",
      "name": 'bilibili',
      "link": 'https://bilibili.com'
    },
    {
      "icon": "/public/images/icon/email.png",
      "name": 'email',
      "link": 'mailto:18438328537@163.com'
    }
  ]
</script>

<style lang="scss" scoped>
  .socialLinks {
    width: 100%;
    display: flex;
    margin-top: 1rem;
    // align-items: center;
    // justify-content: space-between;

    .link {
      width: 100%;
      display: flex;
      justify-content: space-around;
      a {
        display: inherit;
      }
    }
  }
</style>