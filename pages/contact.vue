<template>
  <main class="page-body contact h-full w-full bg-light p-24">
    <h1 class="font-bold text-5xl">
      📝 Contact
    </h1>
    <p>
      Feel free to reach me on <a
        class="text-maroon underline"
        href="https://twitter.com/codebender828"
      >Twitter</a> and by <a
        class="text-maroon underline"
        href="mailto:excellence@jbakebwa.dev"
      >Email</a>.
    </p>
    <div class="mt-3 flex items-center">
      <a
        class="mx-2"
        href="https://twitter.com/codebender828"
      >
        <vue-fontawesome-icon
          class="transition hover:text-red"
          :icon="['fab', 'twitter']"
          size="lg"
        />
      </a>
      <a
        class="mx-2"
        href="mailto:excellence@jbakebwa.dev"
      >
        <vue-fontawesome-icon
          class="transition hover:text-red"
          :icon="['fal', 'envelope']"
          size="lg"
        />
      </a>
    </div>
  </main>
</template>

<script>
export const attributes = {
  layout: 'home'
}
  export default {
    name: 'Contact',
    head() {
      return {
        title: '📬 Contact | Jonathan Bakebwa'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
