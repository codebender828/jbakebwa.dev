<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  render(h) {
    return h('span', {
      attrs: {
        class: ['flex rounded-full bg-red hover:shadow-lg cursor-pointer uppercase px-2 py-1 text-xs font-light mr-2']
      }
    }, this.text)
  }
}
</script>
