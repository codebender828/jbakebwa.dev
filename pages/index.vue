<template>
  <div
    saber-page
    class="page-body home-container flex flex-col-reverse sm:flex-row h-full"
  >
    <perfect-scrollbar class="main-section w-full">
      <div class="flex flex-col items-start p-3 sm:p-10 bg-light h-full">
        <div class="w-full title-block flex flex-col sm:flex-row mb-3 sm:justify-center sm:items-center">
          <ul class="flex mr-auto sm:w-auto w-full mb-3 sm:mb-0">
            <button
              type="button"
              class="mr-3 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-pink-700 bg-pink-100 hover:bg-pink-50 focus:outline-none focus:border-pink-300 focus:shadow-outline-pink active:bg-pink-200 transition ease-in-out duration-150"
              @click="showPolished = true"
            >
              <vue-fontawesome-icon
                :icon="['fad', 'book']"
                size="1x"
                class="-ml-0.5 mr-2 h-4 w-4"
              />
              Articles
            </button>
            <button
              type="button"
              class="ml-auto sm:ml-0 mr-0 sm:mr-3 inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-50 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-blue-200 transition ease-in-out duration-150"
              @click="showPolished = false"
            >
              <vue-fontawesome-icon
                :icon="['fad', 'brain']"
                size="1x"
                class="-ml-0.5 mr-2 h-4 w-4"
              />
              Unpolished thoughts
            </button>
          </ul>
          <search />
        </div>
        <div
          v-if="page.posts"
          class="w-full h-full p-3"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.permalink"
              class="post transition p-2 mb-3"
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
              <div class="flex items-start text-white">
                <span
                  class="text-sm text-gray-800 opacity-75 font-light mr-6"
                >
                  <vue-fontawesome-icon :icon="['fad', 'calendar-day']" />
                  {{ formatDate(post.createdAt) }}
                </span>
                <div class="flex items-start justify-end">
                  <tag
                    v-for="(tag, index) in post.tags"
                    :key="index"
                    :text="tag"
                    :unpolished="post.unpolished"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </perfect-scrollbar>
    <div class="profile bg-black text-white h-full">
      <div class="flex h-full p-10 flex-col items-center justify-center">
        <div class="rounded-full overflow-hidden flex flex-shrink-0 sm:h-32 h-24 sm:w-32 w-24">
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
                class="transition hover:text-teal-400"
                :icon="['fab', 'twitter']"
                size="2x"
              />
            </a>
            <a
              class="mx-2"
              href="https://github.com/codebender828"
            >
              <vue-fontawesome-icon
                class="transition hover:text-teal-400"
                :icon="['fab', 'github']"
                size="2x"
              />
            </a>
          </div>
          <p class="mt-4">
            I'm a Ugandan 🇺🇬  UI engineer living in Beijing, China and I enjoy creating great web experiences. I'm also a co-founder of <a
              style="color: white; text-decoration: underline;"
              href="https://akkadu.com"
            >Akkadu,</a> a startup enabling education without limits by providing live remote simultaneous interpretation.
          </p>
          <p class="mt-4">
            Among other things, I like working with Javascript and Vue.js and this is where I'll share my learnings!
          </p>
          <vue-fontawesome-icon
            class="transition hover:text-teal-400 mt-4"
            :icon="['fab', 'vuejs']"
            size="2x"
          />
          <p class="mt-4">
            Welcome to my blog!
          </p>
          <button data-feedback-fish>
            Feedback
          </button>
          <script
            defer
            src="https://feedback.fish/ff.js?pid=7612e1d34befc4"
          />
        </div>
        <EmailSubscription />
      </div>
    </div>
  </div>
</template>

<script>
import Search from '@/components/search.vue'
import Tag from '@/components/tag.vue'
import EmailSubscription from '@/components/email-subscription.vue'

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
    Tag,
    EmailSubscription
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      showPolished: true
    }
  },
  computed: {
    posts() {
      return this.page.posts.filter(post => {
        if (this.showPolished) {
          if (typeof post.unpolished === 'undefined') {
            return post
          }
        } else {
          if (post.unpolished) return post
        }
      })
    }
  },
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    },
    isDef (value) {
      return typeof value !== 'undefined' || value !== false || value != null
    }
  },
  head() {
    return {
      title: 'Jonathan Bakebwa'
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/scss/global.scss";

.page-body {
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
}

.home-container {
  height: calc(100vh - 50px);
}

@media (max-width: 768px) {
  .home-container {
    height: auto;
  }

  .page-body {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;

    .profile {
      grid-row: 1/2;
      height: auto;
    }

    .main-section {
      grid-row: 2/3;
      height: auto;
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

.post-title {

  &.unpolished {
    &:hover {
      @apply text-blue-600;
    }
  }
}

.transition {
  transition: all 0.2s ease-in-out
}

.profile {
  @apply w-full
}

@media (max-width: 766px) {
  .profile {
    @apply w-full;
    min-width: 100vw;
  }
}
</style>
