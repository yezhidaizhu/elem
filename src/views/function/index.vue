<template>
  hello world!
  {{ count }}
  <button @click="count = count + 1">+++</button>
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