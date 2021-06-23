<template>
  <BaseLayout>
    <template #sider>
      <Sider ref="menu"
             :isCollapse="isCollapse">
        <template #title>
          <span class="truncate">Project</span>
        </template>
      </Sider>
    </template>
    <template #header>
      <span @click="onChangMenuCollapse">
        <i class='text-xl hover:text-blue-500'
           :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
      </span>
    </template>
    <template #content>
      <router-view></router-view>
    </template>
  </BaseLayout>
</template>

<script >
import BaseLayout from '@/components/BaseLayout.vue'
import Sider from '@/components/Sider.vue';

export default {
  components: {
    BaseLayout,
    Sider,
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

