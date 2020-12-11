import getExportData from '@/plugins/getExportData.js';
const config = getExportData('js', require.context('./', true, /\w+\.(js)$/));
export default function install(app) {
  app.config.globalProperties.$utils = config;
}
