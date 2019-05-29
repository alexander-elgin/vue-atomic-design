const templates = require.context('../templates', false, /\.vue$/);

export default function (Vue) {
  templates.keys().forEach((fileName) => {
    const templateName = fileName.replace('./', '').replace('.vue', '');
    Vue.component(`${templateName}-template`, templates(fileName).default);
  });
}
