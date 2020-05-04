// Import plugins
import { installAnalytics } from '@/plugins/analytics'
import { installPluginFontAwesome } from '@/plugins/fa'
import { installPluginVueSimpleScrollbar } from '@/plugins/scrollbar'
import { installDisqus } from '@/plugins/disqus'
import '@/scss/prism.scss'

export default context => {
  installPluginFontAwesome(context.Vue)
  installPluginVueSimpleScrollbar(context.Vue)
  installAnalytics(context)
  installDisqus(context)
}
