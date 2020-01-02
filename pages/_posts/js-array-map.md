---
title: 🏘 Array.map() in Javascript
date: 2020-01-02
layout: blog
excerpt: Here's how Javascript's Array.map operator works
cover: https://res.cloudinary.com/xtellar/image/upload/c_scale,w_1200/v1577977938/jbakebwa.dev/blog-headers/array-map_vvtw7n.jpg
tags:
  - array
  - javascript
---

# 🏘 `Array.map()` in Javascript
If you're getting started with Javascript, or haven't worked a lot with arrays in Javascript, the `Array.map()` might be a new concept to you. By the end of this brief article, you will (at the very least) have an understanding of what the `.map()` operator does and how you can use it to perform god-level ⚡️ operations in your Javascript applications.

> #### TLDR:
> `Array.map()` allows you to use one array of values to create a new set of values related by some functional operation.

## 🎲 The concept of mapping
Javascript's `Array` prototype provides us with a few methods one of which is the `.map()` method. The term `.map` comes from the mathematical concept of mapping in set theory. A map is a function applied to a _domain_ of values to create a unique set of values called a _range_.

![Mapper Function Illustration](https://res.cloudinary.com/xtellar/image/upload/v1577979121/jbakebwa.dev/illustrations/mapper-illustration_ocnina.jpg)
*Fig.1 - Illustration of mapping in set theory*

In the above illustration, Set A is our domain and Set B is our range. By comparing the values in both sets, we can determine that the values in our range are _double the corresponding range value_. Therefore, **Set B is produced by mapping over each of the values Set A with the function `y = 2x`.**

You can read more about mapping [here](https://www.encyclopediaofmath.org/index.php/Mapping).

## `Array.map()`
The `Array.map()` method creates a **new array** with the returned value from our mapper function for each of our array entries. This means that _for each entry, the `.map()` method will be called once sequentially.

Now that we know what mapping is, let's see how we can use this in our apps. In Javascript, an array is simply a set of values. Similar to our [concept illustration](#%f0%9f%8e%b2-the-concept-of-mapping), let's use `Array.map` to create a new array of doubled values.

```js
// Initial Array A
const arrayA = [1, 2, 3]

// Mapper function
function double(value) {
  return value * 2
}

// Invoke .map() function with our double function
// as the callback function
const arrayB = arrayA.map(double)

console.log(B)  // => [2, 4, 6]

```

🎉 Hooray! Now we have a new array created by mapping over our first array of values. This is a simple example of what the `Array.map()` function can do.

### `.map()` callback arguments
`Array.map()` allows us to easily create new arrays from already existing ones. The callback passed into the `.map()` is invoked with three arguments: the value of the current element, the index of the element, and the Array object being traversed.

```js
const newArray = array.map((currentValue, currentIndex, originalArray) => {
  /* ... */
})
```

### Conclusion
Apart from the `.map()` method, Javascript's `Array.prototype` gives some other powerful higher order functions that we can use to manipulate and transform arrays in javascript. These include:

- [`Array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [`Array.reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [`Array.flatMap()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)
- [`Array.every()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- And [more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

These are but a few essential array higher order functions that you will fnd useful for making your code more simpler and more maintainable.

Say Hello to me on [Twitter](https://twitter.com/codebender828) if you have any questions. Cheers! ⚡️
