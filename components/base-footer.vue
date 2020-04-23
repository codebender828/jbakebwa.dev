<template>
  <footer
    :class="{ unpolished }"
    class="footer text-white sm:px-20 px-3 sm:py-8 py-3"
  >
    <div class="flex sm:flex-row flex-col">
      <!-- Logo and Social Media -->
      <div class="logo mb-5 sm:mb-1">
        <saber-link
          to="/"
          class="flex items-center flex-shrink-0 text-white mr-6 mb-2"
        >
          <stellar-logo
            fill-color="#fff"
            class="h-8 w-8 mr-2"
          />
          <span class="font-semibold text-xl font-mono tracking-tight">Jonathan Bakebwa</span>
        </saber-link>
        <div class="social flex text-white mt-1">
          <a
            class="mx-2 text-xl"
            href="https://twitter.com/codebender828"
          >
            <vue-fontawesome-icon
              class="transition hover:text-dark"
              :icon="['fab', 'twitter']"
              size="1x"
            />
          </a>
          <a
            class="mx-2 text-xl"
            href="https://github.com/codebender828"
          >
            <vue-fontawesome-icon
              class="transition hover:text-dark"
              :icon="['fab', 'github']"
              size="1x"
            />
          </a>
          <a
            class="mx-2 text-xl"
            href="mailto:excellence@jbakebwa.dev"
          >
            <vue-fontawesome-icon
              class="transition hover:text-red"
              :icon="['fal', 'envelope']"
              size="1x"
            />
          </a>
        </div>
      </div>
      <!-- Links -->
      <div class="flex flex-col sm:mr-auto">
        <h1 class="links text-2xl font-bold">
          Links
        </h1>
        <saber-link
          to="/"
          class="block mt-2 hover:text-dark sm:inline-block hover:text-white transition mr-4"
        >
          Home
        </saber-link>
        <saber-link
          to="/blog.html"
          class="block mt-2 hover:text-dark sm:inline-block  hover:text-white transition mr-4"
        >
          Blog
        </saber-link>
        <saber-link
          to="/about.html"
          class="block mt-2 hover:text-dark sm:inline-block hover:text-white transition mr-4"
        >
          About
        </saber-link>
        <saber-link
          to="/contact.html"
          class="block mt-2 hover:text-dark sm:inline-block hover:text-white transition"
        >
          Contact
        </saber-link>
      </div>
      <!-- Coffee Links -->
      <div class="sm:flex flex sm:flex-row flex-col sm:justify-start sm:items-start justify-center items-center mr-2">
        <div class="rounded-full flex mr-2 mb-6 items-center overflow-hidden h-12 w-12">
          <img
            src="@/assets/images/profile/jonathan-bakebwa.jpeg"
            alt="Jonathan Bakebwa"
          >
        </div>
        <div class="support text-xs flex sm:text-left justify-center text-center flex-col">
          <p>Hi! Thanks for visiting!</p>
          <p>If you like my work, and would like to support it, consider buying me a coffee 😀.</p>
          <a
            class="my-2 px-3 py-2 text-dark sm:text-left text-center bg-light shadow-lg rounded mt-6 sm:mr-auto sm:ml-0 mx-auto"
            href="https://www.buymeacoffee.com/dIlWof6x5"
          >
            <vue-fontawesome-icon
              class="mr-2 text-lg"
              :icon="['fad', 'coffee-togo']"
            />
            Order Latte!
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import StellarLogo from '@/components/stellar-logo.vue'

export default {
  name: 'BaseFooter',
  components: {
    StellarLogo
  },
  props: {
    unpolished: Boolean
  }
}
</script>

<style lang="scss" scoped>
.footer {
  transition: all 0.2s ease-in-out;
  background: linear-gradient(45deg, var(--red), var(--maroon));
  font-family: var(--source-sans);

  &.unpolished {
    background: linear-gradient(45deg, var(--blue), var(--royal-blue));
  }
}

.support {
  width: 200px;
}

@media (max-width: 767.98px) {
  .support {
    width: auto;
  }
}
</style>
