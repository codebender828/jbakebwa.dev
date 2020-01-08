const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN

let mixpanelConfig = {
  token: MIXPANEL_TOKEN,
  debug: true
}

export function installAnalytics({ router }) {
  if (process.browser) {

    (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+'=([^&]*)')))?m[1]:null};f&&d(f,'state')&&(j=JSON.parse(decodeURIComponent(d(f,'state'))),'mpeditor'===j.action&&(b.sessionStorage.setItem('_mpcehash',f),history.replaceState(j.desiredHash||'',c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split('.');2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,
    0)))}}var e=a;'undefined'!==typeof g?e=a[g]=[]:g='mixpanel';e.people=e.people||[];e.toString=function(b){var a='mixpanel';'mixpanel'!==g&&(a+='.'+g);b||(a+=' (stub)');return a};e.people.toString=function(){return e.toString(1)+'.people (stub)'};l='disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove'.split(' ');
    for(h=0;h<l.length;h++)c(e,l[h]);var f='set set_once union unset remove delete'.split(' ');e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=['get_group'].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2;b=c.createElement('script');b.type='text/javascript';b.async=!0;b.src='undefined'!==typeof MIXPANEL_CUSTOM_LIB_URL?
    MIXPANEL_CUSTOM_LIB_URL:'file:'===c.location.protocol&&'//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js'.match(/^\/\//)?'https://cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js':'//cdn4.mxpnl.com/libs/mixpanel-2-latest.min.js';d=c.getElementsByTagName('script')[0];d.parentNode.insertBefore(b,d)}})(document,window.mixpanel||[]);

    mixpanel.init(MIXPANEL_TOKEN)

    router.afterEach(to => {
      console.log({ to })
      mixpanel.track('Page Viewed', { 'page': to.path })
    })
  }
}
