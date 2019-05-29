module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        win: {
          icon: './public/favicon.ico',
        },
        extraResources: [
          './resources/bin/sox',
          './resources/raw-records',
          './resources/records',
          './resources/sounds',
          './resources/scripts',
        ].map(from => ({ from, to: from.split('/').pop() })).concat([
          { from: `./resources/bin/baresip/${process.env.ARCH}`, to: './baresip' },
        ]),
      },
    },
    i18n: {
      locale: 'ru',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
