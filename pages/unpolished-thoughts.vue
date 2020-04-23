<template>
  <div class="page-body flex flex-col items-start md:p-12 p-8 bg-light h-auto">
    <div class="w-full title-block flex flex-col sm:flex-row mb-3 sm:justify-center sm:items-center">
      <h1 class="font-bold text-4xl mr-auto">
        My unpolished thoughts
      </h1>
      <search />
    </div>
    <div
      v-if="page.posts"
      class="w-full"
    >
      <ul>
        <li
          v-for="post in posts"
          :key="post.permalink"
          class="post transition p-4 shadow-lg hover:shadow-xl rounded-lg mb-3"
        >
          <h2
            class="post-title transition text-xl font-bold hover:text-pink-600"
            :class="{ unpolished: post.unpolished }"
          >
            <saber-link :to="post.permalink">
              {{ post.title }}
            </saber-link>
          </h2>
          <p
            class="excerpt opacity-75 font-light text-sm mb-3"
          >
            {{ post.excerpt }}
          </p>
          <div class="meta flex items-center mt-3">
            <p
              class="text-sm opacity-75 font-light mr-auto"
            >
              <vue-fontawesome-icon :icon="['fad', 'calendar-day']" /> {{ formatDate(post.createdAt) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'

export const attributes = {
  layout: 'page',
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
  computed: {
    posts() {
      return this.page.posts.filter(post => post.unpolished)
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    }
  },
  head() {
    return {
      title: 'Blogs | Jonathan Bakebwa'
    }
  },
}
</script>

<style lang="scss" scoped>

.post-title {

  &.unpolished {
    &:hover {
      @apply text-blue-600;
    }
  }
}

.post {
  background: var(--white);

  .excerpt {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .meta {
    .link {
      box-shadow: 0 0px 9px 3px rgba(223, 0, 88, 0.25);

      &:hover {
        box-shadow: 0 0px 9px 3px rgba(223, 0, 88, 0.35);
      }
    }
  }
}
</style>

