<template>
  <div class="w-full flex justify-between items-center">
    <div>
      <span @click="onChangMenuCollapse">
        <i
          class="text-xl hover:text-blue-500 mr-2"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
        ></i>
      </span>
      <i class="el-icon-refresh-right text-xl hover:text-blue-500" />
    </div>
    <div>
      <!-- lang -->
      <el-dropdown trigger="click" @command="onChangeLang">
        <span class="el-dropdown-link">
          {{ LangMap[$i18n.locale] }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="zh">中文</el-dropdown-item>
            <el-dropdown-item command="en">English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script >
import store from "store";
import defaultConfig from "@/config/config";

export default {
  setup() {
    const LangMap = {
      zh: "中文",
      en: "English",
    };
    return {
      LangMap,
    };
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false,
    },
    onChangMenuCollapse: {
      type: Function,
      default: () => {},
    },
  },
  created() {
    const lang = store.get("lang") || defaultConfig?.defaultLang || "en";
    this.$i18n.locale = lang;
  },
  methods: {
    onChangeLang(lang) {
      this.$i18n.locale = lang;
      store.set("lang", lang);
    },
  },
};
</script>