## About me

I'm a cool guy from the Mars, nice to meet you folks.

<script>
export default {
  layout: 'page',
  transition (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    const transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    return {
      name: transition
    }
  }
}
</script>