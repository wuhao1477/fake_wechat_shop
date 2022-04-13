<template>
  <div :class="{'has-logo':showLogo}" style="width: 100%;">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        @open="click_open"
        @close="click_close"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import Hamburger from '@/components/Hamburger'

export default {
  components: { SidebarItem, Logo,Hamburger },
  data() {
    return {
      menuActiveText: variables.menuActiveText
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  methods: {    
    toggleSideBar() {
      console.log(1)
      this.$store.dispatch('app/toggleSideBar')
    },
    click_open(index, indexpath) {
      console.log('open', index, indexpath, this)
    },
    click_close(index, indexpath) {
      console.log('close', index, indexpath, this)
    }
  }
}
</script>
<style lang="scss" scoped>
  .hamburger-container {
    height: 40px;
    width: 40px;
    position: absolute;
    top: 0px;
    right: -40px;
    z-index: 1000;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
</style>
