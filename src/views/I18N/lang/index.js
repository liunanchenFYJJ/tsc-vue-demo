import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  messages: {
    'zh': require('./zh'),
    'en': require('./en'),
  },
});
