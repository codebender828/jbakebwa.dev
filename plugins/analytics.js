import VueMultianalytics from 'vue-multianalytics/dist/vue-multianalytics'

let mixpanelConfig = {
  token: process.env.MIXPANEL_TOKEN,
  config: {},
  debug: true
}

export function installAnalytics({ Vue, router }) {
  Vue.mixin({
    mounted() {
      Vue.use(VueMultianalytics, {
        modules: {
          mixpanel: mixpanelConfig
        },
        routing: {
          vueRouter: router,
          preferredProperty: 'name',
        },
      })
    }
  })
}
