import './rpf/vue/vconsole';
import { createApp } from 'vue';
import mixin from '@/mixin/index.js';
import directive from '@/directive/index.js';
import { store } from './store';
import { router } from './router';
import autoRegisterComponent from '@/plugins/autoRegisterComponent';
import vant from '@/plugins/vant';
import vfModal from '@/plugins/vf-modal/index.js';
import App from './App.vue';
import preventScroll from '@/rpf/un/preventScroll';
import '@/api/';

const app = createApp(App);
app.use(mixin);
app.use(store);
app.use(router);
app.use(directive);
app.use(autoRegisterComponent);
app.use(vant);
app.use(vfModal);
preventScroll();
window.onload = async function () {
  router.isReady().then(() => app.mount('#app'));
};
