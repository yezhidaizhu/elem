<template>
  <div class="p-4 bg-white select-none">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="router in routes"
        :to="router"
        :key="router.path"
        >{{ $t(router.name) }}</el-breadcrumb-item
      >
    </el-breadcrumb>
    <div class="flex justify-between items-center mt-3">
      <span class="text-xl font-bold">{{ $t(router.name) }}</span>
      <div>
        <slot name="extra" />
      </div>
    </div>
  </div>
  <div class="m-4 shadow-sm bg-white p-2">
    <slot />
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
export default {
  setup() {
    const router = useRoute();
    const { t } = useI18n();

    const routes = router.matched;

    console.log(router.name);
    return {
      router,
      routes,
    };
    console.log(router.matched);
  },
};
</script>