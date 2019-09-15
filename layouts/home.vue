<template>
  <div class="page-wrapper">
    <navbar />
    <slot />
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
    transition: 'page'
  }
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding-top: 50px;
  height: 100vh;
}

.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}


</style>
