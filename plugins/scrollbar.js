import VueSimpleScrollbar from 'vue-simple-scrollbar'
import 'vue-simple-scrollbar/dist/vue-simple-scrollbar.css'

/**
 * @description Installs Vue Simple Scrollbar Plugin
 * @param {Object} Vue - Vue Instance
 */
export function installPluginVueSimpleScrollbar(Vue) {
  Vue.component('vue-simple-scrollbar', VueSimpleScrollbar)
}
