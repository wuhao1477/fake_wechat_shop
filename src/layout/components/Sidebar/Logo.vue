<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <!-- <div v-else class="sidebar-title">{{ title }} </div> -->
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <div class="sidebar-title">{{ title }} </div>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '微信小商店',
      logo: 'https://res.wx.qq.com/wxaproducttrade/dist/images/logo_ad9047.svg'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  margin: 40px 16px 24px;
  display: flex;
  background: #ffffff;
  // text-align: center;
  overflow: hidden;
  & a {
      display: flex !important;
  }
  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 40px;
      height: 40px;
      margin-right: 16px;
      margin-left: 12px;
      vertical-align: middle;
    }

    & .sidebar-title {
      line-height: 1.7;
      margin-top: 6px;
      font-size: 20px;
      font-weight: bold;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #353535;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 16px;
    }
  }
}
</style>
