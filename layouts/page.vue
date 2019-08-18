<template>
  <div>
    <h2 class="page-title">
      {{ page.title }}
    </h2>
    <div class="page-content">
      <slot name="default" />
    </div>
  </div>
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

<style lang="scss">
@import "@/scss/tailwind.scss";
@import "@/scss/variables.scss";
@import "@/scss/fonts.scss";

code,pre {
  font-family: var(--fira-code);
}

.saber-highlight {

  code[class*="language-"],
  pre[class*="language-"] {
    font-family: var(--fira-code);
  }
}
</style>
