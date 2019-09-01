<template>
  <div class="page-wrapper">
    <navbar />
    <slot name="default" />
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar.vue'
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
</style>
