<template>
  <div class="flex items-stretch h-screen">
    <el-scrollbar class="overflow-hidden shadow-md">
      <slot name="sider" />
    </el-scrollbar>
    <div class="flex flex-col flex-1">
      <header class="flex items-center header  p-4 shadow  bg-white">
        <slot name="header" />
      </header>
      <el-scrollbar class="flex-1">
        <slot name="content" />
        <slot name="footer" />
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 64px;
  overflow: hidden;
}
</style>

