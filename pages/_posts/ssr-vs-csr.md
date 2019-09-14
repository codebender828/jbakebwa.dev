---
title: Do You Need Server-Side Rendering?
date: 2019-07-08
layout: page
---

The need to use Server side or Client-side rendering in your application is very much dependent on the nature of your application and the kind of experience you need to deliver to your users.

The need to use Server side or Client-side rendering in your application is very much dependent on the nature of your application and the kind of experience you need to deliver to your users. Because at the end of the day, they (most likely) do not care what stack you use. They only want to be smiling throughout the experience they get on your website.

In this article, I will labour to identify the advantages and disadvantages of both techniques and some possible pointers to help you make a decision for your application.

# Client Side Rendering (CSR)

If your application has dynamic data that needs to be rendered in the DOM, you could opt to download all the javascript you need to execute your application on the client and thereafter use AJAX to get the data. This is known as **Client-side rendering**(CSR from here on.) This is the magic that gives us the goodness of Single Page Applications(SPAs). SPAs can also be created using [Universal Applications](#) as we shall see later in this article.

## Pros:

- After the initial page load, routing between pages is lightning fast. This is because all the javascript for each route is downloaded to the client before the page is made interactive.
- Time To First Byte(TTFB) for client-side rendering is faster than server-side rendering. This is because the server has to spend some time to create the HTML for your page instead of just sending out a relatively empty response.

## Cons:

- For large applications, your Time to First Paint(TFP), Time to First Contentful Paint(TFCP) is slower, giving your application a slower perceived performance. A common workaround for this problem is to use a loader image to show on top of the web page while the application is loading. When page load is complete the loader image is then removed.
- Your SEO indexing isn't necessarily going to be that great. This is because some web crawlers still run on versions of Chrome that are as old as version 44. That means they need to heavily polyfilled in order to parse the data in your javascript application. And as expected, in most cases, this just doesn't work. Hopefully this improves in the future.

# Server Side Rendering (SSR)

With Server-side Rendering, Your application is able to render both static and dynamic content on the server. That means that the initial content needed to load your web page is first dynamically prefetched and then rendered on the server as mark up. That way your browser doesn't need to parse initial javascript in order to render markup on your page.

## Pros:

- **Faster Time To First Paint and Time to First Contentful Paint.** This gives users the feeling of a faster page load and content they can consume once the markup is parsed and rendered by the browser. This means that the blank page flicker that happens with CSR won't happen with SSR. In CSR applications.
- **Better SEO indexing.** Search engine crawlers will access fully rendered pages in your application.

## Cons:

- **Development constraints** with client-side libraries in your app referencing `document` or `window`
- **More involved build setup and deployment requirements**. Unlike a fully static SPA that can be deployed on any static file server, a server-rendered app requires an environment where a server can run.
- **More server-side load.** Rendering a full app in server-side environments like Node.js is more CPU-intensive than just serving static files, so if you expect high traffic, be prepared for corresponding server load and wisely employ caching strategies.
- **Slower Time To First Byte.** The server has to spend some time to create the HTML for your page instead of just sending out a relatively empty response.
- In some Javascript frameworks, the template rendering methods maybe synchronous methods. This means that they hold the event loop on the server side. For example, for React 15 and below the `ReactDOMServer.renderToString` was a synchronous process. This would make page load slower if you're prefetching a lot of data on the client.
  **NOTE:** This issue has been solved in React version 16. So please make sure you’re using that instead. 😀

# Pre-Rendering

Pre-rendering is a tradeoff between client-side and server-side rendering. Every pre-rendered page displays a skeleton template while the data waits to be rehydrated with AJAX/XHR requests. Once the page content is fetched, routing is done dynamically to take advantage of a client-side rendered website.

Pre-rendering is also perfect for static sites. Perfect candidates for this would be a home page, landing page or blog posts. Popular Front End Pre-rendering frameworks include Gridsome for Vue.js and Gatsby for React.js.

# Building Universal Applications

Universal (or Isomorphic) JavaScript is a term that has become very common in the JavaScript community today. It’ describes JavaScript code that can execute both on the client and the server.
Universal applications send to the browser a page populated with data. Then the app loads its JavaScript in the background and rehydrates the page to get a fully client-side rendered application. Universal applications are all about creating the experience of an SPA, but instead of sending the client a blank `index.html` page, we pre-load the application on a web server and send them rendered HTML as the response for every route.

## Conclusion

Both Server-side rendering, and Client-side rendering are great tools that the web has given us to make great applications for our users. If it matters to your users that they see dynamic content on your site, then SSR might be way to go for you. Example sites can be news, media or dynamically driven applications that need to give your users something to look at immediately they load your page.

If SEO is your most important requirement for a relatively small website, then you might not need SSR. Pre-rendering with hydration for a client-side rendered application like Vue.js or React.js might be the best alternative.

If you need the best of both worlds, fast TFCP while delivering the snappiness of a Single Page, then a Universal / Hybrid application might be the best decision. An example of a javascript frameworks that enables you to do this is Nuxt.js(Basically Vue.js on steroids. Or in better words, it’s a higher-level framework that builds _on top_ of Vue that abstracts away the details of server and client code distribution so you can focus on application development.)

At the end of the day, no solution is 100% perfect. Either way, you will make some tradeoffs while you build applications on the web. So its best to understand what tradeoffs you're willing to bear and minimize the losses while having a little fun along the way!

## Further Reading

[Experimentally verified: "Why client-side templating is wrong"](https://www.onebigfluke.com/2015/01/experimentally-verified-why-client-side.html) by Brett Slatkin

## 🚀 Want to Edit this Doc?

Link to this Doc on Github → https://github.com/codebender828/ssr-csr-article
