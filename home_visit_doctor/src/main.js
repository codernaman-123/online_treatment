import { createApp } from 'vue'
// import Vue from 'vue';
// import ElementUI from 'element-ui';
// // import locale from 'element-ui/lib/locale/lang/en'
// import en from "element-ui/lib/locale/lang/en";
// // Vue.use(ElementUI, { locale: en });
import App from './App.vue'
import router from './router'
import store from './store'
// Vue.use(ElementUI, { locale: en });
createApp(App).use(store).use(router).mount('#app')
