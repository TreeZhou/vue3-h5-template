import getExportData from '@/plugins/getExportData.js';
const config = getExportData('js', require.context('./', true, /\w+\.(js)$/));
export default function initFilter(app) {
  Object.keys(config).forEach(key => {
    app.filter(key, config[key]);
  });
}
