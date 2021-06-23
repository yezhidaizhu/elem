<template>
  <BaseLayout>
    <template #sider>
      <Menu ref="menu"
            :isCollapse="isCollapse">
        <template #title>Title</template>
      </Menu>
    </template>
    <template #header>
      <span @click="onChangMenuCollapse">
        <i class='text-xl hover:text-blue-500'
           :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
      </span>
    </template>
    <template #content>
      content
    </template>
  </BaseLayout>
</template>

<script >
import BaseLayout from '@/components/BaseLayout.vue'
import Menu from '@/components/Menu.vue';

export default {
  components: {
    BaseLayout,
    Menu,
  },
  data() {
    return {
      isCollapse: true
    }
  },
  methods: {
    onChangMenuCollapse() {
      this.isCollapse = !this.isCollapse;
    }
  }
}
</script>

