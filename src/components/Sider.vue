<template>
  <el-menu default-active="1-4-1"
           class="el-menu-vertical"
           @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse"
           :router="true">
    <div class="text-3xl font-bold flex justify-center p-2">
      <slot>
        <span class="truncate">{{title}}</span>
      </slot>
    </div>
    <Menu :menus="menus" />
  </el-menu>
</template>

<script>
import Menu from './Menu.vue'
export default {
  props: {
    title: {
      type: String,
      default: "Project"
    },
    isCollapse: {
      type: Boolean,
      default: false
    },
    menus: {
      type: Array,
      default: [],
    }
  },
  components: {
    Menu,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 100vh;
  padding-bottom: 64px;
}
.el-menu--collapse {
  min-height: 100vh;
}
</style>
