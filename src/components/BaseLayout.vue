<template>
  <div class="flex items-stretch h-screen">
    <el-scrollbar class="overflow-hidden ">
      <slot name="sider" />
    </el-scrollbar>
    <div class="flex flex-col flex-1">
      <header class="flex items-center header  p-2">
        <slot name="header" />
      </header>
      <el-scrollbar class="flex-1 p-2">
        <slot name="content" />
      </el-scrollbar>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 48px;
  overflow: hidden;
}
</style>

