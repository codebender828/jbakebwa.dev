---
title: Leverage `provide/inject` to avoid prop drilling in Vue.js
date: 2020-01-28
layout: blog
excerpt: How to use `provide` & `inject` to avoid prop drilling in Vue.js
tags: 
 - provide
 - inject
 - reactivity
cover: https://res.cloudinary.com/xtellar/image/upload/c_scale,q_52,w_1920/v1580271492/jbakebwa.dev/blog-headers/provide-inject_xcirmu.jpg
---

# Leverage `provide/inject` to avoid prop drilling in Vue.js

### Table of Contents
- [Working with Props](#props)
- [What is `provide` & `inject` ?](#provide-inject)
  - [`provide` API](#provide)
  - [`inject` API](#inject)
- [Real World Example](#example)
- [When to use `provide` & `inject`](#when-to-use)
- [Conclusion](#conclusion)

<a id="props"></a>
### Working with props.

Out of the box, Vue.js gives us the ability to pass data from a parent component to it's children using [props.](https://vuejs.org/v2/guide/components-props.html) This makes it a lot easier to share information from a parent to it's child components.

Props can be both static, and dynamic(and/or reactive). This means that when the value of a prop that is passed from a parent to a child component changes, the prop value in the child updates as well and triggers a re-render for that component.

There are also instances when you need to share some values in a parent component with a (for lack of a better word) grandchild component. To solve this, one could use props to pass them down to the child and then the child component would eventually pass them down to it's grandchild component. However this is not very elegant and results in [prop drilling](https://codeburst.io/react-anti-pattern-prop-drilling-54474d5236bd) which can be difficult to maintain for large applications.

<a id="provide-inject"></a>
### Vue's `provide` / `inject` API.
In order to help prevent the prop drilling phenomenon, Vue.js also allows us to expose or `provide` variables in the parent component, that any child component in it's component tree depth can `inject` into it's context.

Vue uses these two properties combined to allow an ancestor component to serve as a dependency injector for all of it's descendants in the same parent chain. This opens up some really cool possibilities. Now, regardless of how deep the component hierarchy is, any descendant component can _inject_ variables _provided_ by an ancestor component into it's own context.

<a id="provide"></a>
#### `provide` API
In order to make an ancestor component provide some variables to it's children, we use the `provide` property in the said component. The `provide` option [can be an object or a function that returns an object.](https://vuejs.org/v2/api/#provide-inject)

```js

// Provider.js

export default {
  name: 'Provider',
  provide() {
    return {
      $colorMode: 'light'
    }
  }
}
```

<a id="inject"></a>
#### `inject` API
In the Child component that we wish to use/consume the variables provided by our `Provider` component, we can use the `inject` property. The `inject` option can either be:
- an array of strings, or
- an object where the keys are the local binding name and the value is either:

```js

// Child.js

export default {
  name: 'Child',
  inject: ['$colorMode'],
  created () {
    console.log(this.$colorMode) // => "light"
  }
}
```

Cool! Now we have the `$colorMode` available in the `Child` component.

Let's look at a Real World Example to illustrate this.

<a id="example"></a>
## Themed Component Library with `provide` and `inject`.
A lot of component libraries that have themes that require that the `theme` object is made available any where in the Vue application. This `theme` can be used to determine the colors for any given color mode. We'll also need to know the color mode of the application that the users prefer.

In this example, we'll create an tiny component library in Vue that has a light and dark color modes, and we use the current color mode to determine the colors of a descendant button component which exists at a much lower location in the component tree heirarchy.

<iframe
  src="https://codesandbox.io/embed/using-provideinject-to-theme-vue-application-qumbr?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Using Provide/Inject to theme Vue application."
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

All code can be found in this [codesandbox](https://codesandbox.io/s/using-provideinject-to-theme-vue-application-qumbr)

### 1. `ThemeProvider` component.
We start by making a `ThemeProvider.vue` component to provide two variables that we will need, namely:
- `$theme` - This is the global app theme object with color variables from our design system
- `$colorMode` - This is the current application color mode that the user prefers.

I prefer to prefix provided variables with the `$` so as to prevent namespace clashing in consumer components. It's easier for me to distinguish injected variables from local component variables.

This is what the `ThemeProvider` looks like:
```html
<script lang="js">
  export default {
    name: "ThemeProvider",
    props: {
      theme: {
        type: Object,
        default: () => null
      },
      colorMode: {
        type: String,
        default: "light"
      }
    },
    /*
    * Here we provide the theme and colorMode we received
    * from the props
    */
    provide() {
      return {
        $theme: () => this.theme,
        $colorMode: () => this.colorMode
      };
    },
    render() {
      return this.$slots.default[0];
    }
  };
</script>

```

Because this component doesn't render anything in the DOM, we don't need to have a template so we make it a [renderless component](https://adamwathan.me/renderless-components-in-vuejs/)

### 2. `Button` consumer component
As the user toggles the color mode between light and dark, we need to inject the changed values in the button so as to reflect the corresponding theme styles accordingly. To do that we create a `Button.vue` component.

```html

<script lang="js">
export default {
  name: "Button",
  inject: ["$theme", "$colorMode"],
  computed: {
    theme() {
      return this.$theme();
    },
    colorMode() {
      return this.$colorMode();
    }
  }
};
</script>

```

In our `Button.vue` component we use a computed variable in order to preserve the reactivity of the variables provided by the `ThemeProvider.vue` component.

Hooray! With any luck, you should be seeing these changes in your child component as well. For a more fully fleshed out example of how you can use `provide`/`inject`, here's a [codesandbox example.](https://codesandbox.io/s/using-provideinject-to-theme-vue-application-qumbr)

<a id="when-to-use"></a>
### When to use `provide` & `inject`
In most applications, you will most probably not need to use the `provide`/`inject` features in Vue. A lot of the problems that it solves can be easily solved with proper state management using Vuex, or even props. 

> `provide` and `inject` are primarily provided for advanced plugin / component library use cases. It is NOT recommended to use them in generic application code.
~ [Official Vue.js Docs](https://vuejs.org/v2/api/#provide-inject)


Thank you for reading!