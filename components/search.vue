<template>
  <div class="search flex p-2 rounded-lg overflow-hidden items-center relative">
    <vue-fontawesome-icon
      :icon="['fal', 'search']"
      size="md"
      class="mr-2"
    />
    <input
      class="input bg-none"
      type="text"
      placeholder="Search..."
    >
  </div>
</template>

<script>
  export default {
    name: 'Search'
  }
</script>

<style lang="scss" scoped>
.search {
    background: #e0e0e0;

    .input {
      background: none;

      &::placeholder {
        color: var(--gray);
      }
    }
  }
</style>
