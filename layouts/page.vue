<template>
  <div class="page-wrapper">
    <navbar />
    <slot
      class="content"
      name="default"
    />
    <base-footer class="footer" />
  </div>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import BaseFooter from '@/components/base-footer.vue'

export default {
  components: {
    Navbar,
    BaseFooter
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
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;

  .content {
    width: inherit;
    grid-row: 1/2;
  }

  .footer {
    grid-row: 2/3;
  }
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
