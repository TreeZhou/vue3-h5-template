import getExportData from '@/plugins/getExportData.js';
const config = getExportData('js', require.context('./', true, /\w+\.(js)$/));
export default function (app) {
  Object.keys(config).forEach(key => {
    app.directive(key, config[key]);
  });
}
