import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

/**
 * @description Installs Vue Simple Scrollbar Plugin
 * @param {Object} Vue - Vue Instance
 */
export function installPluginVueSimpleScrollbar(Vue) {
  Vue.use(PerfectScrollbar)
}
