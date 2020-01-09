/* eslint-disable indent */

module.exports = {
  chainWebpack: (config) => {
    const jsRule = config.module.rule('js');
    jsRule.include.add(() => ['src']);

    config.module
      .rule('i18n')
        .resourceQuery(/blockType=i18n/)
        .type('javascript/auto')
        .use('i18n')
        .loader('@kazupon/vue-i18n-loader')
      .end();
  },
  pluginOptions: {
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
  transpileDependencies: [/node_modules[/\\\\]vuetify[/\\\\]/],
};
