<template>
  <main class="page-wrapper">
    <navbar />
    <div
      saber-page
      class="pt-5 blog-content"
    >
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
      <div class="text-center text-white subscribe-panel my-4 p-10 rounded-lg">
        <p class="italic">
          Thanks for reading! You can subscribe to my blog to get notified whenever I publish a new blog. Cheers!
        </p>
        <email-subscription />
      </div>
      <div class="my-10">
        <!-- TODO: Feed live comments to notifications so readers can see currently added comments. -->
        <vue-disqus
          :shortname="shortname"
          :title="page.title"
          :identifier="page.slug"
        />
      </div>
    </div>
    <base-footer />
  </main>
</template>

<script>
import Navbar from '@/components/navbar.vue'
import BaseFooter from '@/components/base-footer.vue'
import EmailSubscription from '@/components/email-subscription.vue'
import generateShareCard from '@jlengstorf/get-share-image'

export default {
  components: {
    Navbar,
    BaseFooter,
    EmailSubscription
  },
  props: {
    page: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      shortname: 'jbakebwa-dev'
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
          name: 'author',
          content: 'Jonathan Bakebwa'
        },
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
        {
          name: 'description',
          property: 'og:description',
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
  },
  transition: 'page'
}
</script>

<style lang="scss" scoped>

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply font-bold mt-5;
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
  @apply underline text-pink-600;
}

img {
  @apply rounded
}

.page-wrapper {
  padding-top: 60px;
}

.hero-img-wrapper {
  height: 40vh;
}

.subscribe-panel {
  background: linear-gradient(-225deg, theme('colors.pink.700'), theme('colors.pink.700') 50%, theme('colors.pink.800') 50%);
}

.post-link {
  @apply text-gray-800 no-underline;

  &:hover {
    @apply text-pink-600 underline;
  }
}

.blog-content {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

@media (max-width: 992px) {
  .blog-content {
    max-width: 600px;
  }
}

@media (max-width: 767.98px) {
  .page-wrapper {
    padding-top: 72px;
  }

  .blog-content {
    max-width: 90vw;
  }
}

</style>
