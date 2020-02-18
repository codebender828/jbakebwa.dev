<template>
  <div class="page-wrapper">
    <navbar />
    <slot
      class="content"
    />
  </div>
</template>

<script>
  import Navbar from '@/components/navbar.vue'

  export const attributes = {
    injectAllPosts: true,
  }
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
      return {
        title: 'Jonathan Bakebwa Blog',
        meta: [
          {
            name: 'description',
            content: 'Learning with Jonathan Bakebwa - Official Blog'
          },
          {
            name: 'twitter:site',
            content: '@codebender828'
          },
          {
            name: 'twitter:title',
            content: 'Jonathan Bakebwa Blog'
          },
          {
            name: 'twitter:card',
            content: 'summary_large_image'
          },
          {
            name: 'twitter:creator',
            content: '@codebender828'
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding-top: 50px;
  height: 100vh;
  width: inherit
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
