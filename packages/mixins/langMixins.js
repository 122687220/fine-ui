export default {
  // inject: ['locale'],
  inject: {
    locale: {
      from: 'locale',
      default: () => {}
    }
  },
  computed: {
    localLocale() {
      return this.locale ? this.locale.locale || {} : {}
    }
  }
}
