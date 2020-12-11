import LoadingIcon from './LoadingIcon.vue';
import Vue from 'vue';
let Constructor = Vue.extend(LoadingIcon);
let instance = new Constructor();
let vm = instance.$mount();
document.body.appendChild(vm.$el);

function install(Vue) {
  app.config.globalProperties.$loading = {
    show: function () {
      vm.visiable = true;
    },
    hide: function () {
      vm.visiable = false;
    }
  };
}
export default install;

// import Loading from '@/components/loading/index.js';
// Vue.use(Loading);
