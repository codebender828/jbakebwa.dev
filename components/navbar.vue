<template>
  <nav
    class="navbar flex fixed top-0 left-0 right-0 z-50 items-center justify-between flex-wrap bg-dirt px-6 py-3"
  >
    <saber-link
      to="/"
      class="flex items-center flex-shrink-0 text-light mr-6"
    >
      <stellar-logo
        fill-color="#fff"
        class="h-8 w-8 mr-2"
      />
      <span class="font-semibold text-xl font-mono tracking-tight">Jonathan Bakebwa</span>
    </saber-link>
    <div
      class="block md:hidden outline-none "
    >
      <button
        class="flex items-center px-3 py-2 border focus:outline-none  rounded text-light border-light hover:text-white hover:border-white"
        @click="showNavMenu = !showNavMenu"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        ><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
      </button>
    </div>
    <div
      :class="{ open: showNavMenu }"
      class="nav-menu w-full block flex-grow md:flex md:items-center md:w-auto"
    >
      <div class="text-sm md:flex font-mono text-light md:w-full">
        <saber-link
          to="/"
          class="block mt-4 ml-auto md:inline-block md:mt-0 text-purple-200 hover:text-white mr-4"
        >
          Home
        </saber-link>
        <saber-link
          to="/blog.html"
          class="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white mr-4"
        >
          Blog
        </saber-link>
        <saber-link
          to="/about.html"
          class="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white mr-4"
        >
          About
        </saber-link>
        <saber-link
          to="/contact.html"
          class="block mt-4 md:inline-block md:mt-0 text-purple-200 hover:text-white"
        >
          Contact
        </saber-link>
      </div>
    </div>
  </nav>
</template>

<script>
  import StellarLogo from '@/components/stellar-logo.vue'
  export default {
    name: 'Navbar',
    components: {
      StellarLogo
    },
    data() {
      return {
        showNavMenu: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 0.2s ease-in-out;
  background: linear-gradient(45deg, var(--red), var(--maroon));
  font-family: var(--source-sans);
}

@media (max-width: 768px) {
  .navbar {
    transition: all 0.2s ease-in-out;

    .nav-menu {
      display: none;

      &.open {
        display: block;
      }
    }
  }
}

</style>
