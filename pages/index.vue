<template>
  <div class="flex h-full">
    <div class="w-1/2 flex flex-col justify-center items-start p-10 bg-gray-400 h-full">
      <h1 class="font-bold text-5xl">
        Blog
      </h1>
      <div
        v-if="page.posts"
        class="recent-posts"
      >
        <ul>
          <li
            v-for="post in page.posts"
            :key="post.permalink"
          >
            <h2>
              {{ formatDate(post.createdAt) }} -
              <saber-link :to="post.permalink">
                {{ post.title }}
              </saber-link>
            </h2>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-1/2 bg-dark-100 text-light h-full">
      <div class="flex h-full p-10 flex-col items-center justify-center">
        <div class="rounded-full overflow-hidden h-48 w-48">
          <img
            src="@/assets/images/profile/jonathan-bakebwa.jpeg"
            alt="Jonathan Bakebwa"
          >
        </div>
        <div class="text-center mt-5">
          <p class="text-xl">
            Hi! I'm Jonathan Bakebwa.
          </p>
          <p class="mt-4">
            I'm a front end engineer from Uganda 🇺🇬 who loves creating great experiences for the web while sharing the things I learn along the way.
          </p>
          <p class="mt-4">
            Welcome to my blog!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export const attributes = {
  layout: 'home',
  injectAllPosts: true,
}
export default {
  name: 'HomePage',
  injectAllPosts: true,
  layout: 'home',
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
