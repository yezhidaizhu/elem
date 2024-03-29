import { createI18n } from 'vue-i18n/index'; // 加上 index 警告消失？
import defalutConfig from '@/config/config';

import zh from './lang/zh';
import en from './lang/en';

const messages = { zh, en };

const defalutLang = defalutConfig?.defaultLang || "en";

const i18n = createI18n({
  locale: defalutLang, // set locale
  fallbackLocale: 'en', // set fallback locale
  messages,
})

export default i18n;
