<template>
  <main class="page-wrapper">
    <navbar />
    <div class="content page-body pt-5 sm:pt-12 px-8 sm:px-20 md:px-56">
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
import generateShareCard from '@jlengstorf/get-share-image'
// import generateShareCard from '@/helpers/share'

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
    const shareImage = generateShareCard({
      title: `${this.page.title}`,
      tagline: this.page.tags.map(tag => `#${tag}`).join('  '),
      cloudName: 'xtellar',
      textColor: 'BB1B5A',
      titleFont: 'Rubik',
      titleExtraConfig: '_bold',
      taglineFont: 'Rubik',
      textLeftOffset: 400,
      imagePublicID: 'jbakebwa.dev/twitter-cards/stellar-twitter-card',
    });
    return {
      title: `${this.page.title} | Jonathan Bakebwa Blog`,
      meta: [
        {
          name: 'image',
          content: shareImage
        },
        {
          name: 'image',
          property: 'og:image',
          content: shareImage
        },
        {
          name: 'description',
          content: this.page.excerpt
        },
        // OpenGraph tags
        {
          name: 'og:url',
          content: `https://jbakebwa.dev/${this.page.permalink}`
        },
        {
          name: 'og:type',
          content: 'article'
        },
        {
          name: 'og:description',
          content: this.page.excerpt
        },
        {
          name: 'og:image',
          content: shareImage
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
  }
}
</script>

<style lang="scss" scoped>
@import '~prismjs/themes/prism.css';
@import '~saber-highlight-css/default.css';

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold mt-4;
}

h1 {
  @apply text-4xl mt-16 mb-8;
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
  width: 100vw;
}

.hero-img-wrapper {
  height: 40vh;
}

@media (min-width: 1190px) {
  .content {
    padding-left: 20rem;
    padding-right: 20rem;
  }
}

@media (min-width: 1190px) {
  .content {
    padding-left: 20rem;
    padding-right: 20rem;
  }
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
