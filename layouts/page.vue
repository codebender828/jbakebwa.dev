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
  methods: {
    formatDate(v) {
      const date = new Date(v)
      return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
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
  transition: 'page'
}
</script>

<style lang="scss">
@import "@/scss/tailwind.scss";
@import "@/scss/variables.scss";
@import "@/scss/fonts.scss";
@import "@/scss/global.scss";

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
  max-width: 100vw;

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

.page-enter-active, .page-leave-active {
  .content {
    transition: opacity 0.1s;
  }
}
.page-enter, .page-leave-to {
  .content {
    opacity: 0;
  }
}

</style>
