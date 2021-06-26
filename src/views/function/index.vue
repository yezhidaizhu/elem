<template>
  <PageHeaderWrapper>
    <template #extra>
      <el-button type="primary" class="mr-4">extra</el-button>
    </template>
    hello world!
    {{ count }}
    <button @click="count = count + 1">+++</button>
  </PageHeaderWrapper>
</template>
<script>
export default {
  data() {
    return {
      count: 1,
    };
  },
};
</script>