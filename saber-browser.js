import Logger from '@/helpers/logger'
import 'prismjs/themes/prism.css'
import 'saber-highlight-css/default.css'

// Import plugins
import { installPluginFontAwesome } from '@/plugins/fa'
import { installPluginVueSimpleScrollbar } from '@/plugins/scrollbar'

export default context => {
  installPluginFontAwesome(context.Vue)
  // installPluginVueSimpleScrollbar(context.Vue)
}
