<template>
  <main class="page-wrapper">
    <navbar />
    <div class="px-4 sm:px-20">
      <section
        v-if="page.cover"
        class="hero-img-wrapper overflow-hidden rounded-lg hover:shadow-lg transition"
      >
        <img
          v-if="page.cover"
          class="w-full h-full object-cover"
          :src="page.cover"
          :alt="`${page.title} - Image`"
        >
      </section>
      <slot />
      <div
        class="my-10 flex"
      >
        <saber-link
          v-if="page.prevPost"
          class="post-link px-3 py-2 border border-dark text-dirt rounded shadow-lg mr-auto hover:border-red no-underline hover:underline transition"
          :to="page.prevPost.permalink"
          :title="`Older Post: ${page.prevPost.title}`"
        >
          &LeftArrow; {{ page.prevPost.title }}
        </saber-link>
        <saber-link
          v-if="page.nextPost"
          class="post-link px-3 py-2 border border-dark text-dirt rounded shadow-lg hover:border-red no-underline hover:underline transition"
          :to="page.nextPost.permalink"
          :title="`Newer Post: ${page.nextPost.title}`"
        >
          {{ page.nextPost.title }} &RightArrow;
        </saber-link>
      </div>
    </div>
    <base-footer />
  </main>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import BaseFooter from '@/components/base-footer.vue'

export default {
  components: {
    Navbar,
    BaseFooter
  },
  head() {
    return {
      title: `${this.page.title} | Jonathan Bakebwa Blog`
    }
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

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold mt-4;
}

h1 {
  @apply text-4xl mt-8 mb-5;
  line-height: 1.2em;
}

h2 {
  @apply mt-7 text-3xl;
}

h3 {
  @apply text-2xl;
}

h4 {
  @apply text-xl;
}

h5 {
  @apply text-lg;
}

h6 {
  @apply text-sm
}

p {
  @apply my-4;
}

ul {
  @apply list-disc pl-10;

  li {
    @apply mb-3;
  }
}

a {
  @apply underline text-red;
}

img {
  @apply rounded
}

.page-wrapper {
  padding-top: 60px;
  margin-top: 60px;
}

.hero-img-wrapper {
  height: 40vh;
}

.post-link {
  @apply text-dark no-underline;

  &:hover {
    @apply text-red underline;
  }
}

@media (max-width: 767.98px) {
  .page-wrapper {
    padding-top: 72px;
  }
}

</style>
