<template>
  <BaseLayout>
    <template #sider>
      <Sider :isCollapse="isCollapse"
             :title="title"
             :menus="menus" />
    </template>

    <template #header>
      <Header :onChangMenuCollapse="onChangMenuCollapse"
              :isCollapse="isCollapse" />
    </template>

    <template #content>
      <div class="m-4 shadow-sm bg-white p-2">
        <router-view></router-view>
      </div>
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from '@/components/BaseLayout.vue'
import Sider from '@/components/Sider.vue';
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { asyncRouterMap } from '@/config/router.config';
import Config from '@/config/config';

const isCollapse = ref(false);
const menus = ref([]);
const title = ref(Config.title);

// menu
const routes = asyncRouterMap.find((item) => item.path === "/");
menus.value = routes && routes?.children || [];

function onChangMenuCollapse() {
  isCollapse.value = !isCollapse.value;
}

</script>

