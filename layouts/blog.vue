<template>
  <main>
    <div class="page-wrapper px-3">
      <navbar />
      <slot />
      <saber-link
        v-if="page.prevPost"
        :to="page.prevPost.permalink"
        :title="`Older Post: ${page.prevPost.title}`"
      >
        &LeftArrow; {{ page.prevPost.title }}
      </saber-link>
    </div>

    <div>
      <saber-link
        v-if="page.nextPost"
        :to="page.nextPost.permalink"
        :title="`Newer Post: ${page.nextPost.title}`"
      >
        {{ page.nextPost.title }} &RightArrow;
      </saber-link>
    </div>
  </main>
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
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper {
  padding-top: 60px;
  height: 100vh;
}
</style>
