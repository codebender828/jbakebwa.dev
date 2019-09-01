<template>
  <div class="flex flex-col items-start md:p-12 p-8 bg-light h-auto">
    <div class="w-full title-block flex mb-3 justify-center items-center">
      <h1 class="font-bold text-5xl mr-auto">
        Blogs
      </h1>
      <search />
    </div>
    <div
      v-if="page.posts"
      class="w-full"
    >
      <ul>
        <li
          v-for="post in page.posts"
          :key="post.permalink"
          class="post transition p-4 shadow-lg hover:shadow-xl rounded-lg mb-3"
        >
          <h2 class="transition text-xl font-bold hover:text-red">
            <saber-link :to="post.permalink">
              {{ post.title }}
            </saber-link>
          </h2>
          <p
            class="excerpt opacity-75 font-light text-sm mb-3"
            v-html="post.excerpt"
          />
          <div class="meta flex items-center mt-3">
            <p
              class="text-sm opacity-75 font-light mr-auto"
            >
              <vue-fontawesome-icon :icon="['fad', 'calendar-day']" /> {{ formatDate(post.createdAt) }}
            </p>
            <saber-link
              :to="post.permalink"
              class="link transition bg-red text-light shadow-md px-2 py-2 rounded"
            >
              Read More <vue-fontawesome-icon :icon="['fal', 'arrow-right']" />
            </saber-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'

export const attributes = {
  layout: 'home',
  injectAllPosts: true,
}

export default {
  components: {
    Search
  },
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
