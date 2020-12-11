import { createRouter, createWebHashHistory } from 'vue-router';
import getExportData from '@/plugins/getExportData.js';
import LittleLoad from '@/views/page/LittleLoad.vue';
let routes = [];
routes.push({
  path: '/',
  name: '',
  component: LittleLoad
});

// 自动注册 @/views/page 目录下的页面成路由
const config = getExportData(
  'vue',
  require.context('@/views/page', true, /\w+\.(vue)$/)
);
Object.keys(config).forEach(key => {
  routes.push({
    path: '/' + key,
    name: key,
    component: config[key]
  });
});
export const router = createRouter({
  history: createWebHashHistory(),
  routes
});

/*
main.js
import router from '@/router/';
 new Vue({
    router
  }).$mount('#app');

app.vue
<router-view></router-view>

*/
