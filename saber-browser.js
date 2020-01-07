// Import plugins
import { installPluginFontAwesome } from '@/plugins/fa'
// import { installAnalytics } from '@/plugins/analytics'

export default context => {
  installPluginFontAwesome(context.Vue)
  installAnalytics(context)
}




import { installAnalytics } from '@/plugins/analytics'
