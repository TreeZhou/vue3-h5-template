import getExportData from '@/plugins/getExportData.js';
const componentsConfig = getExportData(
  'vue',
  require.context('@/components', true, /\w+\.(vue)$/),
  false
);
const viewsConfig = getExportData(
  'vue',
  require.context('@/views', true, /\w+\.(vue)$/),
  false
);
const config = Object.assign({}, componentsConfig, viewsConfig);

export { componentsConfig, viewsConfig };
export default function autoRegisterComponent(app) {
  Object.keys(config).forEach(key => {
    console.log(key);
    app.component(key, config[key]);
  });
}
