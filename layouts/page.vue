<template>
  <div class="page-wrapper">
    <navbar />
    <h2 class="page-title">
      {{ page.title }}
    </h2>
    <div class="page-content">
      <slot />
    </div>
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
    <ul>
      <li v-if="page.prevPost">
        <router-link :to="page.prevPost.permalink">
          Previous: {{ page.prevPost.title }}
        </router-link>
      </li>
      <li v-if="page.nextPost">
        <router-link :to="page.nextPost.permalink">
          Next: {{ page.nextPost.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'

export default {
  components: {
    Navbar
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  },
  head() {
    const pageTitle = this.page.title
    return {
      title: pageTitle ?
        `${pageTitle} - ${this.$siteConfig.title}` :
        this.$siteConfig.title
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

<style lang="scss">
@import "@/scss/tailwind.scss";
@import "@/scss/variables.scss";
@import "@/scss/fonts.scss";
@import "@/scss/global.scss";

code,pre {
  font-family: var(--fira-code);
}

.saber-highlight {

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: var(--fira-code);
  }
}

html,
body {
  margin: 0;
}

.page-wrapper {
  position: relative;
  padding-top: 60px;
}

.recent-posts ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.recent-posts a {
  color: blue;
  text-decoration: none;
}

.slide-right-move,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-right-enter {
  opacity: 0;
  transform: translate(-30px, 0);
}

.slide-right-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-move,
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter {
  opacity: 0;
  transform: translate(30px, 0);
}

.slide-left-leave-active {
  position: absolute;
  opacity: 0;
  transform: translate(-30px, 0);
}
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>
