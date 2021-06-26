<template>
  <el-menu
    :default-active="$route.path"
    class="el-menu-vertical"
    :collapse="isCollapse"
    :router="true"
  >
    <div class="text-2xl font-bold flex justify-center p-2 py-4">
      <slot>
        <span class="truncate">{{ title }}</span>
      </slot>
    </div>
    <Menu :menus="menus" />
  </el-menu>
</template>

<script>
import Menu from "./Menu.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    return {
      isCollapse: computed(() => store.state.app.sideCollapsed),
    };
  },
  props: {
    title: {
      type: String,
      default: "Project",
    },
    menus: {
      type: Array,
      default: [],
    },
  },
  components: {
    Menu,
  },
};
</script>

<style>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 256px;
  min-height: 100vh;
  padding-bottom: 64px;
}
.el-menu--collapse {
  min-height: 100vh;
}
</style>
