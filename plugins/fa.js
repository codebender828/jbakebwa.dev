import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Light Icons
import {
  faArrowRight,
  faSearch
} from '@fortawesome/pro-light-svg-icons'

// Duotone Icons
import {
  faCalendarDay
}
from '@fortawesome/pro-duotone-svg-icons'

// Brands
import {
  faTwitter,
  faGithub,
  faVuejs
}
from '@fortawesome/free-brands-svg-icons'

library.add(
  faCalendarDay,
  faArrowRight,
  faTwitter,
  faGithub,
  faSearch,
  faVuejs
)

/**
 * @description Install Font Awesome Icon Pugin
 * @param {Object} Vue - Vue instance
 */
export function installPluginFontAwesome(Vue) {
  Vue.component('vue-fontawesome-icon', FontAwesomeIcon)
}
