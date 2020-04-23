---
title: Questions about big Vuex store performance
date: 2020-04-23
layout: unpolished
unpolished: true
excerpt: How to use `provide` & `inject` to avoid prop drilling in Vue.js
tags: 
 - vuex
 - performance
 - state
# cover: https://res.cloudinary.com/xtellar/image/upload/c_scale,q_52,w_1240/v1587625789/jbakebwa.dev/blog-headers/performant-vuex_r5bo3k.jpg
---

# Questions about big Vuex store performance

_Published on 2020-04-23_
<br></br>

🚨 _This post is an [unpolished thought](https://twitter.com/siddharthkp/status/1246745962061746178?s=20)_

> TLDR: State management in Vue can get hairy as your app grows bigger. React has some really interesting resources on state management with Redux. I've listed some [here](#borrowing-from-the-react-community) if you're interested in learning about this topic.

As a Vue developer, I enjoy the simplicity with which [Vuex](https://vuex.vuejs.org/) allows me to build applications that possess state that is consumed in multiple components.

This state can be grouped or categorized by the kind of resources through the help of [Vuex modules](https://vuex.vuejs.org/guide/modules.html#modules).

However as the business/end user needs of the application increase, the size of the store can gradually increase - both in the sense of application code and runtime state. Code you once wrote for a small application begins to slow down your application because it's flooded with fetch requests in each component.

These cases may not all be avoidable, but over the last few months, I've been trying to find a way to solve this problem or gather some ideas around it.

On a large project I'm working on, our team early on decided to split the singular large Vuex store into smaller modules. Since our API endpoints are categorized by resource, i.e. `/products`, `/vendors`, `/categories`. it made sense to split our modules in a similar fashion.

A similar application setup for an e-commerce app would look something like this:

```bash
🗂store/
  # Store root
  📄index.js

  # Vuex store modules
  📄users.js
  📄products.js
  📄vendors.js
  📄categories.js
```

### The challenge
In such an application, when working with a RESTful back end, you end up having lots of data going through the store. 

Some of the data in one module could be related the in another. For example, consider a dashboard page where we wish to list all products listed by a specific vendor. Each product has a category that we also want to display in our dashboard page.

I wish to collect and this data in a way that:
- Prevents the client from re-fetchnig data that already exists in the store.
- Ensures fast i.e. `O(1)` access to individual datum from the store
- Efficiently keeps client store data up-to-date with server-side data during CRUD interactions.


### My questions
So far, I feel confident that the decision to split all API resources in to their own module is a good one. However, I still have some thoughts/questions around instantiation, storing and updating of data:

- When is the best time to fetch critical store data?
- Should smaller consumer UI components initialize their own store dispatches or should it be once by the root?
- How is the best way to index module data? Arrays tend to get slow as the size of the array increases.
- How should client-side state be updated? When using arrays to store data in Vuex, one nends to iterate over the array with `Array.find` before one can update that specific index. Maybe using Objects indexed by a specific key could be a beter option.

### Borrowing from the React community

I often draw a lot of inspiration from the React community on patterns that have been proven over time. So, naturally, I looked up some promising recipes and articles that tried to address this state management problem in the React community. Was honestly surprised to find these! Looking forward applying these to my Vue applications and seeing more matierial on this topic in the Vue community!

I've collected them here for those that are interested in learning more about this topic.
- [Normalizing State Shape](https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape) recipe documentation.
- [Using the Redux Store Like a Database](https://hackernoon.com/shape-your-redux-store-like-your-database-98faa4754fd5)

> PS: Redux is the React equivalent for Vuex

### What are your thoughts?
If you have any thoughts/helpful resources on this subject, feel free to [@ me on Twitter](https://twitter.com/codebender828) or comment below! 💚