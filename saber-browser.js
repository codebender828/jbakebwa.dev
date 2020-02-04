// Import plugins
import { installAnalytics } from '@/plugins/analytics'
import { installPluginFontAwesome } from '@/plugins/fa'
import { installDisqus } from '@/plugins/disqus'


export default context => {
  installPluginFontAwesome(context.Vue)
  installAnalytics(context)
  installDisqus(context)
}
