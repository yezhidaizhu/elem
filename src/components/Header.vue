<template>
  <span @click="onChangMenuCollapse">
    <i class='text-xl hover:text-blue-500'
       :class="isCollapse ? 'el-icon-s-unfold':'el-icon-s-fold'"></i>
  </span>
</template>
<script >
export default {
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
    onChangMenuCollapse: {
      type: Function,
      default: () => { }
    }
  }
}
</script>