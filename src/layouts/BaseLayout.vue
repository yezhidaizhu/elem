<template>
  <BaseLayout>
    <template #sider>
      <Sider :title="title" :menus="menus" />
    </template>

    <template #header>
      <Header />
    </template>

    <template #content>
      <div class="m-4 shadow-sm bg-white p-2">
        <router-view></router-view>
      </div>
    </template>

    <template #footer>
      <Footer />
    </template>
  </BaseLayout>
</template>

<script setup>
import BaseLayout from "@/components/BaseLayout.vue";
import Sider from "@/components/Sider.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";
import { asyncRouterMap } from "@/router/router.config";
import Config from "@/config/config";

const menus = ref([]);
const title = ref(Config.title);

// menu
const routes = asyncRouterMap.find((item) => item.path === "/");
menus.value = (routes && routes?.children) || [];
</script>

