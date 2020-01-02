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
    }
  }
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding-top: 50px;
  height: 100vh;
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
