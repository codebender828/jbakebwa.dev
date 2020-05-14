---
title: The journey to Chakra UI Vue!
date: 2020-05-11
layout: blog
excerpt: Five months of building Chakra UI Vue finally came to some kind of closure (or beginning) in last weekend! It's an achievement I am proud of!
tags: 
 - chakra
 - components
cover: https://res.cloudinary.com/xtellar/image/upload/c_scale,q_52,w_1920/v1580271492/chakra-ui/chakra-ui-vue-banner.jpg
---

# The journey to Chakra UI Vue !

Yes! You guessed it! I finally published [Chakra UI Vue.](https://vue.chakra-ui.com). I felt compelled to write about this journey and some things that I felt were key learning points for me.

Five months of building Chakra UI Vue finally came to some kind of closure (or beginning) in last weekend! It's an achievement I am very proud of and I look forward to providing more value to the web. It was a challenge but it was also educational. Especially because I still study Computer Science in Beijing, China and I'm also building [Akkadu](https://akkadu.com), a platform providing remote simultaneous interpretation for events online & offline.

What originally began as a small personal project (because I needed a way to customize UI components without fighting with CSS... Don't worry I'll explain later!) turned into something that is able to provide value to more people along the way.

In case you were wondering, Chakra UI Vue is an accessible component library that allows you to build beautiful and accessible web applications with ease. Check out the documentation [here](https://vue.chakra-ui.com).

### How Chakra UI Vue was born

As the name suggests, it was inspired by Segun Adebayo's Chakra UI for React! At the beginning of the project, I reached out to him on Twitter to ask him about his thought process behind building an accessible but easy to both use and customize component library.

We immediately hit it off! Segun and I were bursting with ideas in those first calls. We'd promise each other to talk for 1 hour and they'd turn into 3 - 4 hour Zoom calls. I was really excited that we shared a lot of similar values and that was when we decided to merge these two projects into one! Besides, I think that having a bigger community regardless of whether we have more opportunities for people to contribute and learn from each other!

I felt compelled to write about what inspired this project in the first place:

## Why build it?

I had a few reasons that motivated me to work on this project:

### 1. Learning about Accessibility

  Before starting this project, I knew very little about accessibility. But I was determined to learn more about it. I had used many Vue component libraries before, but many of them did not quite provide accessibility out of the box. I wanted to finally see a Vue component library that allows it's consumers to not worry about whether the toast notification they're using is accessible. I also learned about [WAI-ARIA](https://www.w3.org/TR/wai-aria-practices-1.1/) authoring practices for components which laid the foundation for all Chakra UI Vue components.

  To solidify this knowledge for myself and also for people who are interested in learning about accessiblity, I made an [accessiblity report](https://github.com/chakra-ui/chakra-ui-vue/issues/88) for each component. It briefly describes the accessiblity features that that the subject component should have! Here's an example for the [Accordion component in Chakra UI Vue](https://github.com/chakra-ui/chakra-ui-vue/blob/master/packages/chakra-ui-core/src/CAccordion/accessibility.md)!

### 2. Understanding Design Systems & UI components

  Coming from a design background, I always wondered how exactly to smoothly transition designs I'd made in Adobe Illustrator(Sorry Figma/Sketch people. I learned Adobe first! And I'm pretty good at it myself!) into a webpage without copying and pasting color codes and measuring pixels on the screen.

  I learned about tools like [Styled System](https://styled-system.com/) that establish an opinionated way of mapping & scaling your styles to the values in your design system tokens. This is partly what led me to use CSS-in-JS with emotion to style Chakra UI Vue components. It was fast, light and easy to use! So why not?

### 3. Style Props
  
  I like CSS but I've never enjoyed actually writing and maintaining it myself.

  This is a pretty hot topic in Web dev and to be honest, I cannot say that either side is terrible. I just liked the scoping that emotion gave out of the box, plus it always ensures that you only consume styles that are being used by components in your app. So the end user doesn't need to download a style sheet that they may never fully use. So there's no need to purge your CSS with external tools.

  Furthermore I was spoiled by Adam Wathan's [Tailwind CSS](http://tailwindcss.com). I needed a way to combine the simplicity of applying styles in the template, while keeping responsive styles and adherence to the theme design system. In a way, Chakra UI drew a lot inspiration from Tailwind CSS and I'm happy to have ripped all these awesome ideas from Tailwind and from other really awesome Vue.js libraries out there.

If you'd like to learn more about Chakra UI, check out the [Why Chakra UI page in the docs.](https://vue.chakra-ui.com/why-chakra-ui)

### Thanks, Team!

Even though I am the original creator of this project, I still am very grateful to these people who directly brought value to it prior to the release!

- **[Segun Adebayo](https://twitter.com/thesegunadebayo)** from Nigeria! He's the original creator of Chakra UI and I'm grateful for the work he's done with Chakra UI to inspire passion for accessibility in me and in the Web development community
- **[Kelvin Omereshone](https://twitter.com/Dominus_Kelvin)** from Nigeria! He is an avid technical writer and helped us work on the docs, and also built the [Chakra UI Vue CLI Plugin](https://www.npmjs.com/package/vue-cli-plugin-chakra-ui) to get you started with Chakra UI Vue.
- **[Mesut Koca](https://twitter.com/imesutkoca)** from Turkey! Mesut is one of the smartest front end engineers I know. He is the author of the [Vue Prism Editor](https://www.npmjs.com/package/vue-prism-editor). (We used this in the docs for Chakra UI Vue) Mesut helped us write tests for Chakra UI Vue!
- **And many more people that I could not list here!**

Chakra UI Vue still has room for improvement! It's still a young library and it probably has a lot that can be improved. But I feel that it's future is bright going forward, thanks to its contributors!

### The Future

In the future we have some more features we'd like to add! When Vue 3 comes out, we're going to have some changes in the theming API to give Chakra UI Vue users even more powers and greater ability to use Chakra in their own personal projects. We felt that some of these changes would be better to have in their own major version and will be built completely for Vue 3.

So for now we'll focus on making the current version of Chakra UI Vue stable!

If you're interested in contributing to @chakra-ui/vue, check out our [Github](https://github.com/chakra-ui/chakra-ui-vue/issues) or shoot me an email (Link's in the footer!)

Thanks for reading!
