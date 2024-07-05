module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false
  },
};