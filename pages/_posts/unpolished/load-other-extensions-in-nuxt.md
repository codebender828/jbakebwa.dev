---
title: Loading .mdx (or other file extensions) as components in Nuxt
date: 2020-05-14
layout: unpolished
unpolished: true
excerpt: This note shows you how to use nuxt modules to load different file extensions in Nuxt.js as components.
tags: 
 - nuxt
 - mdx
 - webpack
 - modules
cover: https://res.cloudinary.com/xtellar/image/upload/c_scale,w_1920/v1589449243/jbakebwa.dev/blog-headers/ext_eftghb.png
---

# Load .mdx(or other file extensions) as components in Nuxt.

_Published on 2020-05-14_
<br></br>

🚨 _This post is an [unpolished thought](https://twitter.com/siddharthkp/status/1246745962061746178?s=20)_

Today I learned that you can configure [Nuxt](https://nuxtjs.org) to load different file extensions as both as pages and as components.

In order for this to work properly I needed to have Nuxt's builder load the files with extensions I wish to load. This is because, by default, Nuxt's builder will ignore any files that are not `.vue` files. This can be achieved by using a Nuxt [module](https://nuxtjs.org/guide/modules/)

> In order for this to work properly you need to have the appropriate webpack loaders for the file extensions you wish to load.

In this example, I'll be importing `.mdx` files as routes under the `pages` directory. So that means I need to have a webpack loader installed for `.mdx` files.

> This applies to any other file extension you wish to support. If you with to import Markdown (`.md`) files into your components, then you must have a `.md` file webpack loader installed as well.

```bash
🗂pages
  📄index.vue
  📄test.mdx
  🗂foo
    📄contact.vue
    📄about.mdx
📄nuxt.config.js
```

### Using modules
[Modules](https://nuxtjs.org/guide/modules/) are like _plugins_ for plugins in Nuxt. These can be used to extend Nuxt's functionality and add different integrations to your Nuxt application.

First we create a module file. We'll call this `load-mdx-module.js`.

```js
// load-mdx-module.js

export default function (options = {}) {

  // Add 'mdx' to build extensions
  this.options.build.additionalExtensions = ['mdx']

  if (this.options.extensions) {

    // Add `mdx` to `extensions` option
    const extensions = this.options.extensions
    !extensions.includes('mdx') && extensions.push('mdx')

    // Add 'mdx' to `build.additionalExtensions`
    this.options.build.additionalExtensions = ['mdx']

    // Extend webpack config
    this.extendBuild((config) => {

      // Here we '.mdx' to webpack's `resolve.extensions` option.
      if (config.resolve.extensions) {
        config.resolve.extensions.push('.mdx')
      } else {
        config.resolve.extensions = ['.mdx']
      }

      // Use `@mdx-js/vue-loader` for `.mdx` files.
      config.module.rules.push({
        test: /\.mdx$/,
        use: [
          'babel-loader',
          '@mdx-js/vue-loader'
        ]
      })
    })
  }
}
```

### Add module to Nuxt config
Add the path to the `load-mdx-module.js` file under the `modules` option in your `nuxt.config.js`

```js
export default {
  // ...
  modules: [
    'path/to/load-mdx-module'
  ]
  // ...
}
```

### Start server

```bash
yarn dev
```

You should be able to visit other routes with `.mdx`  extension or import `.mdx` files in your Vue components.

## Further reading
- [Nuxt.js docs on modules](https://nuxtjs.org/guide/modules/)
- [MDX | Vue Docs](https://mdxjs.com/guides/vue)