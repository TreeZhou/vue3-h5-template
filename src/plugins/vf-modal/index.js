import { createVfModal } from 'vf-modal/dist/index.js';
import 'vf-modal/dist/index.css';
import getExportData from '@/plugins/getExportData.js';
const config = getExportData(
  'vue',
  require.context('@/views/popup', true, /\w+\.(vue)$/),
  false
);

let modals = {};
Object.keys(config).forEach(key => {
  modals[key] = {
    component: config[key]
    // containerClass: '',
  };
});

export const { VfModal, Controller } = createVfModal({
  modals
  // provide: provideStore,
});
export default function initVfModal(app) {
  app.config.globalProperties.$modal = Controller;
}
// this.$modal.open('name');
