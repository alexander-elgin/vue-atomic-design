const templates = require.context('../templates', true, /\.vue$/);

export default function (Vue) {
  templates.keys().forEach((fileName) => {
    const templateName = fileName.replace('./', '').replace('/index.vue', '').replace('.vue', '');
    Vue.component(`${templateName}-template`, templates(fileName).default);
  });
}
