<template>
  <main>
    <nav class="flex justify-between text-sm md:text-base">
      <div>
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
    </nav>
  </main>
</template>

<script>
  export default {
    props: {
      page: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
