<template>
  <template v-for="item in menus"
            :key="item.path">
    <component :is="item.children ? 'ElSubmenu':'ElMenuItem'"
               :index="item.path"
               :route="item">
      <template #title>
        <i :class="item.meta.icon"></i>
        {{item.name}}
      </template>
      <SubMenu :menus="item.children" />
    </component>
  </template>
</template>

<script>
import { ElMenuItem } from 'element-plus';

export default {
  name: 'SubMenu',
  props: {
    menus: {
      type: Array,
      default: [],
    }
  },
  components: {
    ElMenuItem,
  }
}
</script>