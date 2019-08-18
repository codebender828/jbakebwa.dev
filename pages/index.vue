<template>
  <div>
    <h1>My Blog</h1>
    <p>This is my lovely (not yet) homepage!</p>
  </div>
</template>

<script>
export const attributes = {
  layout: 'page',
  injectAllPosts: true
}
import Navbar from '@/components/Navbar.vue'

export default {}
</script>
