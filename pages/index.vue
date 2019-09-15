<template>
  <div class="home-container flex flex-col-reverse sm:flex-row h-full">
    <div class="w-full sm:w-2/3 flex flex-col items-start p-10 bg-light h-full">
      <div class="w-full title-block flex flex-col sm:flex-row mb-3 sm:justify-center sm:items-center">
        <h1 class="font-bold text-5xl mr-auto">
          Blog
        </h1>
        <search />
      </div>
      <div
        v-if="page.posts"
        class="w-full h-full overflow-y-scroll p-3"
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
            <div class="flex text-light">
              <tag
                v-for="(tag, index) in post.tags"
                :key="index"
                :text="tag"
              />
            </div>
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
    <div class="profile w-full sm:w-1/3 bg-no-repeat bg-cover bg-center text-light h-full">
      <div class="flex h-full p-10 flex-col items-center justify-center">
        <div class="rounded-full overflow-hidden h-48 w-48">
          <img
            src="@/assets/images/profile/jonathan-bakebwa.jpeg"
            alt="Jonathan Bakebwa"
          >
        </div>
        <div class="text-center mt-5">
          <p class="text-xl mb-4">
            Hi! I'm Jonathan Bakebwa.
          </p>
          <div class="social flex justify-center items-center">
            <a
              class="mx-2"
              href="https://twitter.com/codebender828"
            >
              <vue-fontawesome-icon
                class="transition hover:text-red"
                :icon="['fab', 'twitter']"
                size="2x"
              />
            </a>
            <a
              class="mx-2"
              href="https://github.com/codebender828"
            >
              <vue-fontawesome-icon
                class="transition hover:text-red"
                :icon="['fab', 'github']"
                size="2x"
              />
            </a>
          </div>
          <p class="mt-4">
            I'm a Ugandan 🇺🇬 front end engineer in China who loves creating great experiences for the web while sharing the things I learn along the way.
          </p>
          <p class="mt-4">
            Among other things, I like working with Vue.js!
          </p>
          <vue-fontawesome-icon
            class="transition hover:text-vue mt-4"
            :icon="['fab', 'vuejs']"
            size="2x"
          />
          <p class="mt-4">
            Welcome to my blog!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'
import Tag from '@/components/tag.vue'

export const attributes = {
  layout: 'home',
  injectAllPosts: true,
}
export default {
  name: 'HomePage',
  injectAllPosts: true,
  layout: 'home',
  components: {
    Search,
    Tag
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  },
  head() {
    return {
      title: 'Jonathan Bakebwa'
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
@import "@/scss/global.scss";

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

.profile {
  background:
  linear-gradient(
    rgba(145, 47, 86, 0.75),
    rgba(22, 0, 88, 0.85)
    ),
    url('../assets/images/giraffe-bg.jpg') no-repeat center center;
}
.transition {
  transition: all 0.2s ease-in-out
}

.home-container {
  width: 100vw;
}
</style>
